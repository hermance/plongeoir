import { combineReducers } from "redux"
import i18n from "./i18n/I18NReducer"
import app from "./app.reducer"

const reducers = combineReducers({
  app,
  i18n
})

export default reducers
