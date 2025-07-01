export const NETFLIX_PROFILE = "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
export const MOVIES_URL = "https://api.themoviedb.org/3/movie/changes?page=1";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const SECTION_IMG_URL =
  "https://occ-0-1241-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/";

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
