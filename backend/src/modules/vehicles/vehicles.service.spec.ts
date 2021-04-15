import { Test, TestingModule } from "@nestjs/testing";
import { EnemiesService } from "../enemies/enemies.service";
import { MoverService } from "../../shared-services/mover.service";
import { VehiclesService } from "./vehicles.service";

describe("VehiclesService", () => {
  let service: VehiclesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesService, MoverService, EnemiesService],
    }).compile();

    service = module.get<VehiclesService>(VehiclesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
