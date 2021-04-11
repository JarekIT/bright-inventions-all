import axios from "axios";

import { EnemyDAO } from "../../interfaces/types";

require("dotenv").config();

export const fetchAllEnemies = async (
  setAllEnemies: React.Dispatch<React.SetStateAction<EnemyDAO[]>>,
  isLoadedEnemies: boolean,
  setIsLoadedEnemies: React.Dispatch<React.SetStateAction<boolean>>
) => {
  await axios
    .get(`${process.env.REACT_APP_API_URL}enemies`)
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
