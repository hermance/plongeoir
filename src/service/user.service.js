import config from "./../utils/config"

const USER_ENDPOINT = "/user"

class UserService {
  static login = (email: string, password: string): Promise<*> => {
    const url =
      config.url + USER_ENDPOINT + "&email=" + email + "&password=" + password //todo provisoir avant d'avoir une vraie api
    return fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
  }
  static getUsers = (): Promise<*> => {
    const url = config.url + USER_ENDPOINT
    return new Promise(function(resolve, reject) {
      fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
    })
  }
}

export default UserService
