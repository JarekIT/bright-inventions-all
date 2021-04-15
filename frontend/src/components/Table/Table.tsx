import React, { memo } from "react";

import TableView from "./TableView";

import { VehicleDTO } from "../../interfaces/types";

interface TableProps {
  allVehiclesOnline: VehicleDTO[];
  allVehiclesOffline: VehicleDTO[];
  filter: string;
}

const Table: React.FC<TableProps> = ({
  allVehiclesOnline,
  allVehiclesOffline,
  filter,
}) => {
  const getFilteredVehicles = (
    allVehicles: VehicleDTO[],
    filter: string
  ): VehicleDTO[] => {
    return [...allVehicles].filter((vehicle: VehicleDTO) => {
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
