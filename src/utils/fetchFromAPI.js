import axios from "axios";

const BASE_URL = "https://moviesdatabase.p.rapidapi.com";

const options = {
  params: { limit: "50" },
  headers: {
    "X-RapidAPI-Key": "47986672bdmsh79ad2d7d0abbbb9p143fa8jsn9dc5550f252b",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
