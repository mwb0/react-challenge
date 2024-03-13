import React from "react"
import { IButton } from "../config/interfaces"

export default function Button({ label, onClick }: IButton) {
  return (
    <div
      role="button"
      tabIndex={0}
      className="bg-green-light hover:bg-green-dark transform duration-150 text-white w-full text-center py-1.5 rounded-md"
      onClick={onClick}
      onKeyUp={onClick}
    >
      {label}
    </div>
  )
}
