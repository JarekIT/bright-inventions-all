import { Module } from "@nestjs/common";
import { EnemiesService } from "./enemies.service";
import { EnemiesController } from "./enemies.controller";

@Module({
  providers: [EnemiesService],
  controllers: [EnemiesController],
  exports: [EnemiesService],
})
export class EnemiesModule {}
