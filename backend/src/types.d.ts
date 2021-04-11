interface IPoint {
  lat: number;
  lng: number;
}

export interface IEnemy extends IPoint {
  id: number;
  name: string;
  shotRange: number;
}

export interface IVehicle extends IPoint {
  id: number;
  name: string;
  alive: boolean;
  hitBy?: string;
  previousLatLng: IPoint;
}
