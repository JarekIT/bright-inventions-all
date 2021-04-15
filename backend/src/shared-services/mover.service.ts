import { Injectable } from "@nestjs/common";
import { Enemy } from "../entity/enemy.entity";
import { Vehicle } from "../entity/vehicle.entity";
import { EnemiesService } from "../modules/enemies/enemies.service";

@Injectable()
export class MoverService {
  constructor(private readonly enemiesService: EnemiesService) {
    this.distanceTravelInOneIntervalInKm = 50;
  }

  private readonly distanceTravelInOneIntervalInKm: number;

  moveSomewhereRandomly(vehicle: Vehicle): void {
    vehicle.move(this.distanceTravelInOneIntervalInKm);
    this.checkIsVehicleInEnemyShootRange(vehicle);
  }

  private checkIsVehicleInEnemyShootRange(vehicle: Vehicle): void {
    this.enemiesService.getEnemies().some((enemy: Enemy): boolean => {
      return enemy.tryHit(vehicle);
    });
  }
}
