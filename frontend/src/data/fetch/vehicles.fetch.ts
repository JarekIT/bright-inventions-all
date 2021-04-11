import axios from "axios";

import { VehicleDAO } from "../../interfaces/types";

require("dotenv").config();

export const fetchAllVehicles = async (
  separateVehiclesByStatus: (allVehicles: VehicleDAO[]) => void,
  isLoadedVehicles: boolean,
  setIsLoadedVehicles: React.Dispatch<React.SetStateAction<boolean>>
) => {
  await axios
    .get(`${process.env.REACT_APP_API_URL}vehicles`)
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
