import { Injectable } from "@nestjs/common";
import { Enemy } from "../../entity/enemy.entity";
import { EnemyDTO } from "../../types/types";
import * as initEnemiesJson from "../../db/initEnemies.json";

@Injectable()
export class EnemiesService {
  constructor() {
    this.allEnemies = this.getListOfEnemiesFromLocalJson();
  }

  private allEnemies: Enemy[];

  getEnemies(): Enemy[] {
    return this.allEnemies;
  }

  private getListOfEnemiesFromLocalJson(): Enemy[] {
    return initEnemiesJson.map((enemy: EnemyDTO) => {
      return new Enemy(
        enemy.id,
        enemy.name,
        enemy.shotRange,
        enemy.lat,
        enemy.lng
      );
    });
  }
}
