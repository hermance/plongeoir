import { combineReducers } from "redux"
import i18n from "./i18n/I18NReducer"
import authentication from "./authentication/authentication.reducer"
import currently from "./currently/currently.reducer"
import feed from "./feed/feed.reducer"
import exhibitorFilters from "./exhibitors/exhibitor-filters.reducer"
import userInfo from "./user/userInfo.reducer"
import maps from "./maps/maps.reducer"
import app from "./app.reducer"
import community from "./community/community.reducer"
import meetMe from "./meetMe/meetMe.reducer"
import error from "./error/error.reducer"
import contact from "./contact/contact.reducer"
import chatbot from "./chatbot/chatbot.reducer"

const reducers = combineReducers({
  app,
  i18n
})

export default reducers
