import { Controller, Get } from "@nestjs/common";
import { IEnemy } from "src/types";
import { EnemiesService } from "./enemies.service";

@Controller("API/v1/enemies")
export class EnemiesController {
  constructor(private readonly enemiesService: EnemiesService) {}

  @Get()
  async getEnemies(): Promise<IEnemy[]> {
    return this.enemiesService.getEnemies();
  }
}
