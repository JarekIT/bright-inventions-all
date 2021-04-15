import { IEnemy, IPoint } from "../types/types";
import { Vehicle } from "./vehicle.entity";

export class Enemy implements IEnemy {
  constructor(
    public id: number,
    public name: string,
    public shotRange: number,
    public lat: number,
    public lng: number
  ) {}

  tryHit(vehicle: Vehicle): boolean {
    const distance: number = this.getDistanceBetweenPoints(this, vehicle);

    if (distance < this.shotRange) {
      console.log(`alert: ${vehicle.name} hit by ${this.name}`);
      this.hit(vehicle);
      return true;
    }
    return false;
  }

  private hit(vehicle: Vehicle): void {
    vehicle.alive = false;
    vehicle.hitBy = this.name;
  }

  private getDistanceBetweenPoints(vehicle: IPoint, enemy: IPoint): number {
    const lat1: number = vehicle.lat,
      lng1: number = vehicle.lng,
      lat2: number = enemy.lat,
      lng2: number = enemy.lng,
      R = 6378137,
      dLat: number = this.degreesToRadians(lat2 - lat1),
      dLong: number = this.degreesToRadians(lng2 - lng1),
      a: number =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.degreesToRadians(lat1)) *
          Math.cos(this.degreesToRadians(lat1)) *
          Math.sin(dLong / 2) *
          Math.sin(dLong / 2),
      c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)),
      distance: number = (R * c) / 1000;

    return distance;
  }

  private degreesToRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }
}
