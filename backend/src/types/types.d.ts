interface IPoint {
  lat: number;
  lng: number;
}

export interface IEnemy extends IPoint {
  id: number;
  name: string;
  shotRange: number;
  tryHit: (vehicle: IVehicle) => boolean;
}

export interface EnemyDTO extends IPoint {
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
  move: (distance: number) => void;
}

export interface VehicleDTO extends IPoint {
  id: number;
  name: string;
}
