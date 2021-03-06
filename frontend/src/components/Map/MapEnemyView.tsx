import React, { memo } from "react";

import { Marker, Circle } from "@react-google-maps/api";

import { EnemyDTO, VehicleDTO } from "../../interfaces/types";

interface MapEnemyViewProps {
  enemy: EnemyDTO;
  setSelected: React.Dispatch<
    React.SetStateAction<VehicleDTO | EnemyDTO | null>
  >;
}

const MapEnemyView: React.FC<MapEnemyViewProps> = ({ enemy, setSelected }) => {
  const optionsCircle = {
    strokeColor: "#ff0000",
  };

  return (
    <React.Fragment key={`e-${enemy.id}`}>
      <Circle
        center={{ lat: enemy.lat, lng: enemy.lng }}
        radius={enemy.shotRange * 1000}
        options={optionsCircle}
      />
      <Marker
        icon={{
          url: "images/military-vehicle-1.svg",
          scaledSize: { width: 48, height: 48 },
        }}
        position={{ lat: enemy.lat, lng: enemy.lng }}
        onClick={() => {
          setSelected(enemy);
        }}
      />
    </React.Fragment>
  );
};

export default memo(MapEnemyView);
