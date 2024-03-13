import React from "react"

interface IPhrase {
  data: [string, boolean][]
}

export default function Phrase({ data }: IPhrase) {
  return (
    <div className="text-5xl sm:text-6xl text-center mb-7 font-semibold break-words">
      {data.map((item, index) => {
        const [val, flag] = item
        return (
          <span
            key={index}
            className={`text-white ${flag ? "bg-green-light px-1" : ""}`}
          >
            {val}
          </span>
        )
      })}
    </div>
  )
}
