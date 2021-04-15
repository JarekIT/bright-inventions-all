import React, { useState, useMemo, memo, useCallback } from "react";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import MapVehicleView from "./MapVehicleView";
import MapEnemyView from "./MapEnemyView";
import MapInfoWindowView from "./MapInfoWindowView";

import { EnemyDTO, IPoint, VehicleDTO } from "../../interfaces/types";

require("dotenv").config();

interface MapProps {
  allVehiclesOnline: VehicleDTO[];
  allVehiclesOffline: VehicleDTO[];
  allEnemies: EnemyDTO[];
  filter: string;
}

const Map: React.FC<MapProps> = ({
  allVehiclesOnline,
  allVehiclesOffline,
  allEnemies,
  filter,
}) => {
  // custom map options
  const mapContainerStyle = {
    width: "50vw",
    height: "100vh",
  };

  const mapCenter: IPoint = {
    lat: 52.2319581,
    lng: 21.0067249,
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_BACKEND_API
      ? process.env.REACT_APP_BACKEND_API
      : "",
  });

  // state to display Marker details
  const [selected, setSelected] = useState<VehicleDTO | EnemyDTO | null>(null);

  // filter methods
  const isFilterActiveMemo: boolean = useMemo(() => {
    return !!!filter;
  }, [filter]);

  const isNameMatchToFilter = (
    vehicle: VehicleDTO,
    filter: string
  ): boolean => {
    return vehicle.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
  };

  const isVehicleVisible = (vehicle: VehicleDTO, filter: string): boolean => {
    return isFilterActiveMemo || isNameMatchToFilter(vehicle, filter);
  };
  const isVehicleVisibleCallback = useCallback(isVehicleVisible, [
    isFilterActiveMemo,
  ]);

  // cases where the map has not yet been loaded
  if (loadError) return <h1>Load map error</h1>;
  if (!isLoaded) return <h1>Loading map...</h1>;

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={mapCenter}
      options={options}
      zoom={5}
    >
      {allEnemies &&
        allEnemies.map((enemy: EnemyDTO) => (
          <MapEnemyView
            key={`e-${enemy.id}`}
            enemy={enemy}
            setSelected={setSelected}
          />
        ))}

      {allVehiclesOnline &&
        allVehiclesOnline.map((vehicle: VehicleDTO) => {
          return (
            isVehicleVisibleCallback(vehicle, filter) && (
              <MapVehicleView
                key={`v-${vehicle.id}`}
                vehicle={vehicle}
                setSelected={setSelected}
              />
            )
          );
        })}

      {allVehiclesOffline &&
        allVehiclesOffline.map((vehicle: VehicleDTO) => {
          return (
            isVehicleVisibleCallback(vehicle, filter) && (
              <MapVehicleView
                key={`v-${vehicle.id}`}
                vehicle={vehicle}
                setSelected={setSelected}
              />
            )
          );
        })}

      {selected && (
        <MapInfoWindowView selected={selected} setSelected={setSelected} />
      )}
    </GoogleMap>
  ) : (
    <React.Fragment />
  );
};

export default memo(Map);
