import { Module } from "@nestjs/common";
import { VehiclesModule } from "./vehicles/vehicles.module";
import { EnemiesModule } from "./enemies/enemies.module";

@Module({
  imports: [VehiclesModule, EnemiesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
