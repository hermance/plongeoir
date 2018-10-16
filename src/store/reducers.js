import { combineReducers } from "redux"
import i18n from "./i18n/I18NReducer"
import app from "./app/app.reducer"
import users from "./users/user.reducer"

const reducers = combineReducers({
  app,
  users,
  i18n
})

export default reducers
