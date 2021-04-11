import React, { memo } from "react";

import { Marker, Circle } from "@react-google-maps/api";

import { EnemyDAO, VehicleDAO } from "../../interfaces/types";

interface MapEnemyViewProps {
  enemy: EnemyDAO;
  setSelected: React.Dispatch<
    React.SetStateAction<VehicleDAO | EnemyDAO | null>
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
          url: "images/military-vehicle.svg",
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
