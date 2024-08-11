import { API_URL, LOCAL_URL } from "@/constants";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const axiosLocal = axios.create({
  baseURL: LOCAL_URL,
});
