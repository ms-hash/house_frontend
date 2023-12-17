import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

const options = {
  ignoreHeaders: true,
}

export const client = applyCaseMiddleware(
  axios.create({
    baseURL: import.meta.env.VITE_API_KEY,
  }),
  options
)

export const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = import.meta.env.VITE_API_KEY;
