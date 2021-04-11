export interface IPoint {
  lat: number;
  lng: number;
}

export interface EnemyDAO extends IPoint {
  id: number;
  name: string;
  shotRange: number;
}

export interface VehicleDAO extends IPoint {
  id: number;
  name: string;
  alive: boolean;
  previousLatLng: IPoint;
  hitBy?: string;
}
