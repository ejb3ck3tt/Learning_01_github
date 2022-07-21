import axios from "axios";
// import { Data } from "../types/unsplash";

interface unsplashResponse {
  data: Array<{}>;
  head: Array<{}>;
}

export async function fetchUnsplash(term: string): Promise<unsplashResponse> {
  return await axios.get("https://api.unsplash.com/search/photos/", {
    params: { query: term, per_page: 30 },
    headers: {
      Authorization: "Client-ID sJ8wh6Ev_A11r8Lqkdbbn0VolAMwp2c6kgSvAWHN37I",
    },
  });
}
