import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import configStore from "./store/store"
import App from "./pages/App"
import "./assets/styles/global.css"

const store = configStore()

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
