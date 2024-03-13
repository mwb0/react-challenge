import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { FormInput, Button, Phrase } from "../components"
import { setFirstName, setLastName } from "../store/actions"
import { findSymbolOnPhrases } from "../utils/handler"
import { IPhrases, IInitState } from "../config/interfaces"

function App() {
  const [phrase, setPhrase] = useState<IPhrases | null>(null)

  const states = useSelector((state) => state) as IInitState
  const dispatch = useDispatch()

  const handler = () => {
    setPhrase({
      firstName: findSymbolOnPhrases(states?.firstName),
      lastName: findSymbolOnPhrases(states?.lastName),
    })
  }

  return (
    <div className="bg-gray-dark min-h-screen relative">
      <div className="w-full h-full flex flex-col justify-center items-center absolute left-0 top-0">
        <div className="max-w-3xl w-full sm:w-auto px-6">
          {phrase !== null && (
            <div>
              <Phrase data={phrase.firstName} />
              <Phrase data={phrase.lastName} />
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="col-span-1">
              <FormInput
                label="First Name"
                val={states?.firstName}
                setVal={(val) => dispatch(setFirstName(val))}
              />
            </div>
            <div className="col-span-1">
              <FormInput
                label="Last Name"
                val={states?.lastName}
                setVal={(val) => dispatch(setLastName(val))}
              />
            </div>
          </div>
          <div className="flex justify-center w-full mt-6 sm:mt-4">
            <Button label="Breakify" onClick={handler} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
