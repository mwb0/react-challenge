export interface IFormInput {
  label: string
  val: string | number
  setVal: (v: string) => void
}

export interface IButton {
  label: string
  onClick: () => void
}

export interface IInitState {
  firstName: string
  lastName: string
}

export interface IAction {
  type: string
  payload: string
}

export interface IPhrases {
  firstName: [string, boolean][]
  lastName: [string, boolean][]
}
