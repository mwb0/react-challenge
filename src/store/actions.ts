import { SET_FIRST_NAME, SET_LAST_NAME } from "./types"

export const setFirstName = (payload: string) => ({
  type: SET_FIRST_NAME,
  payload,
})

export const setLastName = (payload: string) => ({
  type: SET_LAST_NAME,
  payload,
})
