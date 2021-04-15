import { Injectable } from "@nestjs/common";
import { VehiclesService } from "../modules/vehicles/vehicles.service";

@Injectable()
export class IntervalService {
  constructor(private readonly vehiclesService: VehiclesService) {}

  startInterval(moveVehicleIntervalInMs: number): void {
    setInterval(() => {
      this.vehiclesService.moveAllAliveVehicles();
    }, moveVehicleIntervalInMs);
  }
}
