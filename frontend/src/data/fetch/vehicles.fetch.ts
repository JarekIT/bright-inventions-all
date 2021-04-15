import axios from "axios";

import { backupApi } from "./backup.api";

import { VehicleDTO } from "../../interfaces/types";

require("dotenv").config();

export const fetchAllVehicles = async (
  separateVehiclesByStatus: (allVehicles: VehicleDTO[]) => void,
  isLoadedVehicles: boolean,
  setIsLoadedVehicles: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const API: string | undefined = process.env.REACT_APP_API_URL;

  await axios
    // if there is a problem with .env API, use the backup API
    .get(`${API || backupApi}vehicles`)
    .then((res) => {
      separateVehiclesByStatus(res.data);
    })
    .then(() => !isLoadedVehicles && setIsLoadedVehicles(true))
    .catch((error) => {
      console.error(error);
    })
    .finally(() =>
      setTimeout(
        () =>
          fetchAllVehicles(
            separateVehiclesByStatus,
            isLoadedVehicles,
            setIsLoadedVehicles
          ),
        1000
      )
    );
};
