import { Test, TestingModule } from "@nestjs/testing";
import { EnemiesController } from "./enemies.controller";
import { EnemiesService } from "./enemies.service";

describe("EnemiesController", () => {
  let controller: EnemiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnemiesController],
      providers: [EnemiesService],
    }).compile();

    controller = module.get<EnemiesController>(EnemiesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
