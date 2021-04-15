import { Injectable } from "@nestjs/common";
import { MoverService } from "../../shared-services/mover.service";
import { createVehicles } from "./initVehicles";
import { Vehicle } from "../../entity/vehicle.entity";

@Injectable()
export class VehiclesService {
  constructor(private readonly moverService: MoverService) {
    this.allVehicles = createVehicles(100);

    console.table(this.allVehicles);
  }

  private readonly allVehicles: Vehicle[];

  getVehicles(): Vehicle[] {
    return this.allVehicles;
  }

  moveAllAliveVehicles(): void {
    this.allVehicles.forEach((vehicle: Vehicle) => {
      vehicle.alive && this.moverService.moveSomewhereRandomly(vehicle);
    });
  }
}
