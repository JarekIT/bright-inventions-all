import { Injectable } from "@nestjs/common";

import { IEnemy } from "src/types";

import { initSomeEnemies } from "./initEnemies";

@Injectable()
export class EnemiesService {
  private readonly allEnemies: IEnemy[] = initSomeEnemies;

  getEnemies(): IEnemy[] {
    return this.allEnemies;
  }
}
