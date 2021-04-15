import { Injectable } from "@nestjs/common";
import { IntervalService } from "./shared-services/interval.service";

@Injectable()
export class AppService {
  constructor(private readonly intervalService: IntervalService) {
    this.initInterval();
  }

  private initInterval(): void {
    this.intervalService.startInterval(1000);
  }
}
