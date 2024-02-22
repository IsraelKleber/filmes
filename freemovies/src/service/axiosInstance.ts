import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDg3NWE5ODRlMTk2ZGVkYjRiNWYwYWRlYmRlYzc2ZSIsInN1YiI6IjY1ZDYzZWFjZjI5ZDY2MDE2NGU4ZTVhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jg-PQGekCiWWIDfck9lRjeZOppsXbEOtVutyuXpWHWI`,
  },
});

export default axiosInstance;
