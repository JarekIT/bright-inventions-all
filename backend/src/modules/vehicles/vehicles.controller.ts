import { Controller, Get } from "@nestjs/common";
import { Vehicle } from "../../entity/vehicle.entity";
import { VehiclesService } from "./vehicles.service";

@Controller("API/v1/vehicles")
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get()
  getVehicles(): Vehicle[] {
    return this.vehiclesService.getVehicles();
  }
}
