import axios from "axios";

import { backupApi } from "./backup.api";

import { EnemyDTO } from "../../interfaces/types";

require("dotenv").config();

export const fetchAllEnemies = async (
  setAllEnemies: React.Dispatch<React.SetStateAction<EnemyDTO[]>>,
  isLoadedEnemies: boolean,
  setIsLoadedEnemies: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const API: string | undefined = process.env.REACT_APP_API_URL;

  await axios
    // if there is a problem with .env API, use the backup API
    .get(`${API || backupApi}enemies`)
    .then((res) => {
      setAllEnemies(res.data);
    })
    .then(() => !isLoadedEnemies && setIsLoadedEnemies(true))
    .catch((error) => {
      console.error(error);
      setTimeout(
        () =>
          fetchAllEnemies(setAllEnemies, isLoadedEnemies, setIsLoadedEnemies),
        1000
      );
    });
};
