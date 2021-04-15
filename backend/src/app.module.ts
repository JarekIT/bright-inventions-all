import { Module } from "@nestjs/common";
import { VehiclesModule } from "./modules/vehicles/vehicles.module";
import { EnemiesModule } from "./modules/enemies/enemies.module";
import { AppService } from "./app.service";

@Module({
  imports: [VehiclesModule, EnemiesModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
