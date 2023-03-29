import axios from "axios";

export const axiosUrl = axios.create({
  baseURL: "http://localhost:5000/api",
});
