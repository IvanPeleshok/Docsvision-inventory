import { composeWithDevTools } from "redux-devtools-extension"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import { appReducer } from "./app-reducer"

export let rootReducer = combineReducers({
  app: appReducer,
})

const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(thunkMiddleware)
    : composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer, devTools)
export default store
