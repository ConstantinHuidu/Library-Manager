import Axios from "axios";

import { showToast } from "../utils/show-toast";

const API_URL = "http://localhost:3001";

function authRequestInterceptor(config: any) {
  config.headers.Accept = "application/json";
  return config;
}

export const libraryApi = Axios.create({
  baseURL: API_URL,
});

libraryApi.interceptors.request.use(authRequestInterceptor);
libraryApi.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message =
      error.response?.data?.message || error.message || "Server error";
    showToast("error", message, { hideProgressBar: true });
    return Promise.reject(error);
  }
);
