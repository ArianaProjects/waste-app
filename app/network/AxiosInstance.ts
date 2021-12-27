import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://waste.agio360.com/api",
});

export default AxiosInstance;
