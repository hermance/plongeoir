import { combineReducers } from "redux"
import i18n from "./i18n/I18NReducer"
import app from "./app.reducer"
import user from "./user.reducer"

const reducers = combineReducers({
  app,
  user,
  i18n
})

export default reducers
