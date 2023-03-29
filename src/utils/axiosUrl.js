import axios from "axios";

export const axiosUrl = axios.create({
  baseURL: "https://netflix-api-s4i3.onrender.com/api",
});
