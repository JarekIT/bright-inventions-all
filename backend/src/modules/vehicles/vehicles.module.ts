import { Module } from "@nestjs/common";
import { VehiclesService } from "./vehicles.service";
import { VehiclesController } from "./vehicles.controller";
import { EnemiesService } from "../enemies/enemies.service";
import { IntervalService } from "../../shared-services/interval.service";
import { MoverService } from "../../shared-services/mover.service";

@Module({
  providers: [VehiclesService, EnemiesService, IntervalService, MoverService],
  controllers: [VehiclesController],
  exports: [IntervalService, VehiclesService, MoverService],
})
export class VehiclesModule {}
