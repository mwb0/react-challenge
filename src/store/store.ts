import { thunk } from "redux-thunk"
import { createStore, applyMiddleware } from "redux"
import reducer from "./reducers"
import { initState } from "./state"

export default function configStore() {
  const middleware = [
    thunk,
    process.env.NODE_ENV === "dev" && require("redux-logger").logger,
  ].filter(Boolean)

  return applyMiddleware(...middleware)(createStore)(reducer, initState)
}
