import type { Dispatch } from "redux"
import UserService from "../service/user.service"
export const TOGGLE_LOAD = "TOGGLE_LOAD"
export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
import type UserType from "./types"

function toggleLoad(isLoading: boolean) {
  return {
    type: TOGGLE_LOAD,
    isLoading
  }
}
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

const appActions = {
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
  toggleLoad: (isLoading: boolean) => (dispatch: Dispatch<any>): void => {
    //TODO pour un loader global , à implémenter côté ui
    dispatch(toggleLoad(isLoading))
  }
}

export default appActions
