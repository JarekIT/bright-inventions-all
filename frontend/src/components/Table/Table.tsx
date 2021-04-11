import React, { memo } from "react";

import TableView from "./TableView";

import { VehicleDAO } from "../../interfaces/types";

interface TableProps {
  allVehiclesOnline: VehicleDAO[];
  allVehiclesOffline: VehicleDAO[];
  filter: string;
}

const Table: React.FC<TableProps> = ({
  allVehiclesOnline,
  allVehiclesOffline,
  filter,
}) => {
  const getFilteredVehicles = (
    allVehicles: VehicleDAO[],
    filter: string
  ): VehicleDAO[] => {
    return [...allVehicles].filter((vehicle: VehicleDAO) => {
      return (
        filter === "" ||
        vehicle.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
      );
    });
  };

  return (
    <React.Fragment>
      <TableView
        title={"Vehicles ONLINE"}
        head={["Id", "Name", "Current Lat", "Current Lng", "Status"]}
        allVehiclesToView={getFilteredVehicles(allVehiclesOnline, filter)}
      />

      <TableView
        title={"Vehicles OFFLINE"}
        head={["Id", "Name", "Last Seen Lat", "Last Seen Lng", "Hit By"]}
        allVehiclesToView={getFilteredVehicles(allVehiclesOffline, filter)}
      />
    </React.Fragment>
  );
};

export default memo(Table);
