export interface IPoint {
  lat: number;
  lng: number;
}

export interface EnemyDTO extends IPoint {
  id: number;
  name: string;
  shotRange: number;
}

export interface VehicleDTO extends IPoint {
  id: number;
  name: string;
  alive: boolean;
  previousLatLng: IPoint;
  hitBy?: string;
}
