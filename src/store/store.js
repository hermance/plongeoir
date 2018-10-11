import React from "react"
import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/es/storage"
import thunk from "redux-thunk"
import reducers from "./reducers"
import { composeWithDevTools } from "remote-redux-devtools-sp"

const myCreateStore = (env: TypeEnv, onRehydrate: () => void) => {
  const rootReducer = persistReducer(
    {
      key: "v1", // Change this prefix to get a brand new storage
      storage, // In a browser, we could use AsyncStorage
      blacklist: [
        // i18n reducer does not need to be persisted.
        // Anyway, there is a funcion in this state which would prevent serialzation
        "i18n",
        // Il redux-form is used, do not persist forms
        "form",
        // the same for navigation if present.
        "nav",
        "api"
      ]
    },
    reducers
  )

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  )

  persistStore(store, undefined, () => {
    if (onRehydrate) {
      onRehydrate()
    }
  })

  return store
}

export default myCreateStore
