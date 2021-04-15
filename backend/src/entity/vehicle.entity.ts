import { IPoint, IVehicle } from "../types/types";

export class Vehicle implements IVehicle {
  constructor(
    public id: number,
    public name: string,
    public lat: number,
    public lng: number
  ) {
    this.previousLatLng = { lat, lng };
    this.alive = true;
  }

  public alive: boolean;
  public previousLatLng: IPoint;
  public hitBy?: string;

  move(distanceTraveled: number): void {
    const distanceInLatLng: number = distanceTraveled / 111,
      random: number = 4 * Math.random();

    this.previousLatLng.lat = this.lat;
    this.previousLatLng.lng = this.lng;

    if (random > 3) {
      this.lat += distanceInLatLng;
    } else if (random > 2) {
      this.lng += distanceInLatLng;
    } else if (random > 1) {
      this.lat -= distanceInLatLng;
    } else {
      this.lng -= distanceInLatLng;
    }
  }
}
