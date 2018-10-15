import { config } from "./../utils/config"

const USER_ENDPOINT = "users"

class UserService {
  static login = (email: string, password: string): Promise<*> => {
    const url =
      config.url + USER_ENDPOINT + "?email=" + email + "&password=" + password //todo provisoir avant d'avoir une vraie api
    return fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(resJson => {
        if (resJson && resJson.length > 0) {
          return resJson[0] //TODO on est avec une api de test suer basique sans BDD, donc pas d'unicité , à reformater avec la future vraie api
        } else {
          return null
        }
      })
  }
  static register = (
    email: string,
    password: string,
    firstname: string,
    lastname: string
  ): Promise<*> => {
    const url = config.url + USER_ENDPOINT
    return fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname
      })
    }).then(res => {
      return res
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
