import { Injectable } from "@nestjs/common";
import { EnemiesService } from "src/enemies/enemies.service";

import { IEnemy, IPoint, IVehicle } from "src/types";
import { createVehicles } from "./initVehicles";

@Injectable()
export class VehiclesService {
  constructor(private readonly enemiesService: EnemiesService) {
    // init values
    this.allVehicles = createVehicles();
    this.moveVehicleIntervalInMs = 1000;
    this.distanceTravelInOneIntervalInKm = 25;

    const interval: NodeJS.Timeout = setInterval(() => {
      this.moveAllAliveVehicles();
    }, this.moveVehicleIntervalInMs);

    console.table(this.allVehicles);

    // for Heroku Dyno Hours - stop interval after 30 min
    setTimeout(() => clearInterval(interval), 30 * 60 * 1000);
  }

  private readonly allVehicles: IVehicle[];
  private readonly moveVehicleIntervalInMs: number;
  private readonly distanceTravelInOneIntervalInKm: number;

  getVehicles(): IVehicle[] {
    return this.allVehicles;
  }

  private moveAllAliveVehicles(): void {
    this.allVehicles.forEach((vehicle: IVehicle) => {
      vehicle.alive && this.moveSomewhereRandomly(vehicle);
    });
  }

  private moveSomewhereRandomly(vehicle: IVehicle): void {
    const distanceInLatLng: number = this.distanceTravelInOneIntervalInKm / 111;

    const random: number = 4 * Math.random();

    vehicle.previousLatLng.lat = vehicle.lat;
    vehicle.previousLatLng.lng = vehicle.lng;

    if (random > 3) {
      vehicle.lat += distanceInLatLng;
    } else if (random > 2) {
      vehicle.lng += distanceInLatLng;
    } else if (random > 1) {
      vehicle.lat -= distanceInLatLng;
    } else {
      vehicle.lng -= distanceInLatLng;
    }

    this.checkIsVehicleInEnemyShootRange(vehicle);
  }

  private degreesToRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }

  private getDistanceBetweenPoints(vehicle: IPoint, enemy: IPoint): number {
    const lat1: number = vehicle.lat;
    const lng1: number = vehicle.lng;

    const lat2: number = enemy.lat;
    const lng2: number = enemy.lng;

    const R = 6378137;
    const dLat: number = this.degreesToRadians(lat2 - lat1);
    const dLong: number = this.degreesToRadians(lng2 - lng1);
    const a: number =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.degreesToRadians(lat1)) *
        Math.cos(this.degreesToRadians(lat1)) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);

    const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance: number = (R * c) / 1000;

    return distance;
  }

  private checkIsVehicleInEnemyShootRange(point: IVehicle): void {
    this.enemiesService.getEnemies().some((enemy: IEnemy): boolean => {
      const distance: number = this.getDistanceBetweenPoints(enemy, point);

      if (distance < enemy.shotRange) {
        console.log("alert: " + point.name + " hit by " + enemy.name);
        point.alive = false;
        point.hitBy = enemy.name;
        return true;
      } else {
        return false;
      }
    });
  }
}
