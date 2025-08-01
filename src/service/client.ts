import { BASE_URL } from "@/service/endpoints";
import axios, { type AxiosInstance } from "axios";

const axiosClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
