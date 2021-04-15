import { Test, TestingModule } from "@nestjs/testing";
import { EnemiesService } from "../enemies/enemies.service";
import { MoverService } from "../../shared-services/mover.service";
import { VehiclesController } from "./vehicles.controller";
import { VehiclesService } from "./vehicles.service";

describe("VehiclesController", () => {
  let controller: VehiclesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiclesController],
      providers: [VehiclesService, MoverService, EnemiesService],
    }).compile();

    controller = module.get<VehiclesController>(VehiclesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
