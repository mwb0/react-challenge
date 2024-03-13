import { SET_FIRST_NAME, SET_LAST_NAME } from "./types"
import { initState } from "./state"
import { IAction } from "../config/interfaces"

const reducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case SET_FIRST_NAME:
      return { ...state, firstName: action.payload }
    case SET_LAST_NAME:
      return { ...state, lastName: action.payload }
    default:
      return state
  }
}

export default reducer
