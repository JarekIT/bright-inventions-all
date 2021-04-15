import { Test, TestingModule } from "@nestjs/testing";
import { EnemiesService } from "../modules/enemies/enemies.service";
import { VehiclesService } from "../modules/vehicles/vehicles.service";
import { IntervalService } from "./interval.service";
import { MoverService } from "./mover.service";

describe("IntervalService", () => {
  let service: IntervalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        IntervalService,
        VehiclesService,
        MoverService,
        EnemiesService,
      ],
    }).compile();

    service = module.get<IntervalService>(IntervalService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
