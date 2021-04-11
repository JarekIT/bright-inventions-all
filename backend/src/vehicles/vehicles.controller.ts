import { Controller, Get } from "@nestjs/common";
import { IVehicle } from "src/types";
import { VehiclesService } from "./vehicles.service";

@Controller("API/v1/vehicles")
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get()
  async getVehicles(): Promise<IVehicle[]> {
    return this.vehiclesService.getVehicles();
  }
}
