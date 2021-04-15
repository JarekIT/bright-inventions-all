import { Controller, Get } from "@nestjs/common";
import { Enemy } from "../../entity/enemy.entity";
import { EnemiesService } from "./enemies.service";

@Controller("API/v1/enemies")
export class EnemiesController {
  constructor(private readonly enemiesService: EnemiesService) {}

  @Get()
  getEnemies(): Enemy[] {
    return this.enemiesService.getEnemies();
  }
}
