import React, { memo } from "react";

import { Marker, Polyline } from "@react-google-maps/api";

import { EnemyDTO, VehicleDTO } from "../../interfaces/types";

interface MapVehicleViewProps {
  vehicle: VehicleDTO;
  setSelected: React.Dispatch<
    React.SetStateAction<VehicleDTO | EnemyDTO | null>
  >;
}

const MapVehicleView: React.FC<MapVehicleViewProps> = ({
  vehicle,
  setSelected,
}) => {
  return (
    <React.Fragment key={`v-${vehicle.id}`}>
      <Marker
        icon={{
          url: vehicle.alive ? "images/helicopter.svg" : "images/explosion.svg",
          scaledSize: { width: 32, height: 32 },
        }}
        position={{
          lat: Number(vehicle.lat),
          lng: Number(vehicle.lng),
        }}
        onClick={() => {
          setSelected(vehicle);
        }}
      />

      <Polyline
        path={[
          { lat: vehicle.lat, lng: vehicle.lng },
          {
            lat: vehicle.previousLatLng.lat,
            lng: vehicle.previousLatLng.lng,
          },
        ]}
        options={{
          strokeColor: "red",
          strokeOpacity: 1,
          strokeWeight: 2,
          icons: [
            {
              icon: "hello",
              offset: "0",
              repeat: "10px",
            },
          ],
        }}
      />
    </React.Fragment>
  );
};

export default memo(MapVehicleView);
