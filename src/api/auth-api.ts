import { handleErr, instance } from "./api"

export const userAPI = {
  login(login: string, password: string) {
    return instance
      .post(`/login`, { login, password })
      .then((response) => response)
      .catch((err) => handleErr(err))
  },
  getUserInfo() {
    return instance
      .get(`/profile`)
      .then((response) => response)
      .catch((err) => handleErr(err))
  },
}
