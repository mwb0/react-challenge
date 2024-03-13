import React from "react"
import { IFormInput } from "../config/interfaces"

export default function FormInput({ label, val, setVal }: IFormInput) {
  return (
    <div>
      <p className="text-white pb-1 font-bold text-center sm:text-left">
        {label}
      </p>
      <input
        type="text"
        className="bg-gray-light rounded-md py-1.5 px-4 text-white outline-none w-full text-center sm:text-left"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
    </div>
  )
}
