import type { Dispatch } from "redux"
import UserService from "../service/user.service"
export const TOGGLE_LOAD = "TOGGLE_LOAD"
export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
import type UserType from "./types"
import appActions from "./app.action-creator"

function login(user: UserType) {
  return {
    type: LOGIN,
    user
  }
}
function logout() {
  return {
    type: LOGOUT
  }
}

const userActions = {
  login: (email: string, password: string) => (
    dispatch: Dispatch<any>
  ): void => {
    dispatch(toggleLoad(true))
    return UserService.login(email, password)
      .then(user => {
        dispatch(toggleLoad(false))
        if (user) {
          return dispatch(login(user))
        }
        return Promise.resolve()
      })
      .catch(err => Promise.reject(err))
  },
  logout: () => (dispatch: Dispatch<any>): void => {
    return dispatch(logout())
  },
  register: (
    email: string,
    password: string,
    firstname: string,
    lastname: string
  ) => (dispatch: Dispatch<any>): void => {
    dispatch(toggleLoad(true))
    return UserService.register(email, password, firstname, lastname)
      .then(() => {
        dispatch(appActions.toggleLoad(false))
      })
      .catch(err => Promise.reject(err))
  }
}

export default userActions
