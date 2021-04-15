import { Test, TestingModule } from "@nestjs/testing";
import { EnemiesService } from "./enemies.service";

describe("EnemiesService", () => {
  let service: EnemiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnemiesService],
    }).compile();

    service = module.get<EnemiesService>(EnemiesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
