import React, { useState, useEffect, useMemo } from "react";

import Map from "./Map/Map";
import Table from "./Table/Table";
import Filter from "./Filter/Filter";
import Waiting from "./Waiting/Waiting";

import { EnemyDAO, VehicleDAO } from "../interfaces/types";

import { fetchAllEnemies } from "../data/fetch/enemies.fetch";
import { fetchAllVehicles } from "../data/fetch/vehicles.fetch";

require("dotenv").config();

const Main = () => {
  const [allEnemies, setAllEnemies] = useState<EnemyDAO[]>([]);
  const [allVehiclesOnline, setAllVehiclesOnline] = useState<VehicleDAO[]>([]);
  const [allVehiclesOffline, setAllVehiclesOffline] = useState<VehicleDAO[]>(
    []
  );

  const [filter, setFilter] = useState<string>("");

  const [isLoadedEnemies, setIsLoadedEnemies] = useState<boolean>(false);
  const [isLoadedVehicles, setIsLoadedVehicles] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(
      () => fetchAllEnemies(setAllEnemies, isLoadedEnemies, setIsLoadedEnemies),
      1000
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(
      () =>
        fetchAllVehicles(
          separateVehiclesByStatus,
          isLoadedVehicles,
          setIsLoadedVehicles
        ),
      1000
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const separateVehiclesByStatus = (allVehicles: VehicleDAO[]): void => {
    const tempAllVehiclesOnline: VehicleDAO[] = [];
    const tempAllVehiclesOffline: VehicleDAO[] = [];

    allVehicles.forEach((vehicle: VehicleDAO) => {
      vehicle.alive
        ? tempAllVehiclesOnline.push(vehicle)
        : tempAllVehiclesOffline.push(vehicle);
    });

    setAllVehiclesOnline(tempAllVehiclesOnline);
    setAllVehiclesOffline(tempAllVehiclesOffline);
  };

  const isLoadedMemo: boolean = useMemo(() => {
    return isLoadedEnemies && isLoadedVehicles;
  }, [isLoadedEnemies, isLoadedVehicles]);

  return isLoadedMemo ? (
    <React.Fragment>
      <div className="row">
        <div className="column">
          <Map
            allVehiclesOnline={allVehiclesOnline}
            allVehiclesOffline={allVehiclesOffline}
            allEnemies={allEnemies}
            filter={filter}
          />
        </div>
        <div className="column">
          <Filter filter={filter} setFilter={setFilter} />
          <Table
            allVehiclesOnline={allVehiclesOnline}
            allVehiclesOffline={allVehiclesOffline}
            filter={filter}
          />
        </div>
      </div>
    </React.Fragment>
  ) : (
    <Waiting text={"Waiting for server"} />
  );
};

export default Main;
