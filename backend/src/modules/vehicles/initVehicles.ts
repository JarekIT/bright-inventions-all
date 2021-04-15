import { Vehicle } from "../../entity/vehicle.entity";
import { IPoint } from "../../types/types";
/*
 * Supporting methods for vehicle randomization
 * only for mocking data
 */
const firstNames = ["Falcon", "Wolf", "Tiger", "Fox", "Eagle"];
const secondNames = ["Alfa", "Bravo", "Charlie", "Delta", "Echo"];
const locations: IPoint[] = [
  { lat: 52.2319581, lng: 21.0067249 },
  { lat: 48.856697, lng: 2.351462 },
  { lat: 44.436141, lng: 26.10272 },
  { lat: 41.89332, lng: 12.4829321 },
  { lat: 59.9133301, lng: 10.7389701 },
];

function randomFirstName(): string {
  return firstNames[Math.floor(Math.random() * firstNames.length)];
}
function randomSecondName(): string {
  return secondNames[Math.floor(Math.random() * secondNames.length)];
}
function randomLocation(): IPoint {
  return locations[Math.floor(Math.random() * locations.length)];
}

export const createVehicles = (
  numbersOfVehiclesToGenerate: number
): Vehicle[] => {
  const allVehicles: Vehicle[] = [];

  for (let i = 0; i < numbersOfVehiclesToGenerate; i++) {
    const startLocation: IPoint = randomLocation();

    const newVehicle: Vehicle = new Vehicle(
      i,
      `${randomFirstName()} ${randomSecondName()} ${i}`,
      startLocation.lat,
      startLocation.lng
    );

    allVehicles.push(newVehicle);
  }
  return allVehicles;
};
