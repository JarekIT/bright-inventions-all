import React, { memo } from "react";

import _ from "lodash";

import { VehicleDTO } from "../../interfaces/types";

interface TableViewProps {
  title: string;
  head: string[];
  allVehiclesToView: VehicleDTO[];
}

const TableView: React.FC<TableViewProps> = ({
  title,
  head,
  allVehiclesToView,
}) => {
  return (
    <React.Fragment>
      <h4>{title}</h4>
      <table>
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={`${title}-${i}`}> {h} </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {allVehiclesToView &&
            allVehiclesToView.map((vehicle: VehicleDTO) => {
              return (
                <tr key={vehicle.id} data-testid={`v-${vehicle.id}`}>
                  <td>{vehicle.id}</td>
                  <td>{vehicle.name}</td>
                  <td>{vehicle.lat.toFixed(4)}</td>
                  <td>{vehicle.lng.toFixed(4)}</td>
                  <td>{vehicle.hitBy || "ONLINE"}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default memo(TableView, _.isEqual);
