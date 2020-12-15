import axios, { CancelToken, AxiosError } from "axios"
import Cookies from "js-cookie";
import { AlertifyStatusEnum } from "../types/types"
import { converToFormData } from "../utils/apiFunctions"
import { showAlert } from "../utils/showAlert"
import { userAPI } from "./auth-api"

export let apiURL = ""

export const instance = axios.create({
  baseURL: `${apiURL}api/`,
  headers: {
    "Content-Type": "application/json",
    "API-KEY": "",
  },
})

instance.interceptors.response.use(
  response => response,
  error => {
    if (
      error.response.status !== 401 ||
      !error.response.headers["token-expired"]
    ) {
      return Promise.reject(error.response.status);
    }
    const tokens = {
      accessToken: Cookies.get("accessToken"), 
      refreshToken: Cookies.get("refreshToken")
    };
    return axios
      .post(`${apiURL}/auth/refresh`, tokens)
      .then(response => {
        Cookies.set("accessToken", response.data.accessToken);
        Cookies.set("refreshToken", response.data.refreshToken);
        instance.defaults.headers["Authorization"] = `Bearer ${response.data.accessToken}`;
        error.response.config.headers[
          "Authorization"
        ] = `Bearer ${response.data.accessToken}`;
        return axios(error.response.config);
      })
      .catch(error => {
        console.log(error);
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        delete instance.defaults.headers["Authorization"];
        return Promise.reject(error.response.status);
      });
  }
);

export const setTokenForAPI = (token: string) => {
  instance.defaults.headers.Authorization = "Bearer " + token
}

export const handleErr = async (err: AxiosError) => {
  if (err?.response?.status && err?.response?.status === 429) {
    showAlert(
      AlertifyStatusEnum.warn,
      "Очень много запросов на сервер. Пожалуйста, подождите"
    )
  } else {
    showAlert(AlertifyStatusEnum.error, "Что-то пошло не так")
  }

  return err?.response
}

export enum ResultCode {
  Success = 0,
  Error = 1,
}
