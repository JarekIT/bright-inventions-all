import { Module } from "@nestjs/common";
import { VehiclesService } from "./vehicles.service";
import { VehiclesController } from "./vehicles.controller";
import { EnemiesService } from "src/enemies/enemies.service";

@Module({
  providers: [VehiclesService, EnemiesService],
  controllers: [VehiclesController],
})
export class VehiclesModule {}
