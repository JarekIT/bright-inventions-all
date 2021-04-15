import React from "react";

import { InfoWindow } from "@react-google-maps/api";
import _ from "lodash";

import { EnemyDTO, VehicleDTO } from "../../interfaces/types";

interface MapInfoWindowViewProps {
  selected: VehicleDTO | EnemyDTO;
  setSelected: React.Dispatch<
    React.SetStateAction<VehicleDTO | EnemyDTO | null>
  >;
}

const MapInfoWindowView: React.FC<MapInfoWindowViewProps> = ({
  selected,
  setSelected,
}) => {
  return (
    <InfoWindow
      position={{ lat: Number(selected.lat), lng: Number(selected.lng) }}
      onCloseClick={() => setSelected(null)}
    >
      <div>
        <h2>Name: {selected.name}</h2>
        <p>Id: {selected.id}</p>
        <p>Clicked Lat: {selected.lat.toFixed(4)}</p>
        <p>Clicked Lng: {selected.lng.toFixed(4)}</p>
      </div>
    </InfoWindow>
  );
};

export default React.memo(MapInfoWindowView, _.isEqual);
