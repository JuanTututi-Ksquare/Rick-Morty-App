import axios from "axios";

export const getRandomLocation = async () => {
  const response = await axios.get(
    "https://rickandmortyapi.com/api/location/4", { params: { page: 1 } }
  );
  const location = response.data;
  return location;
};

export const getSearchedLocation = async (locationId: string) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/location/${locationId}`, { params: { page: 1 } }
  );
  const location = response.data;
  return location;
};
