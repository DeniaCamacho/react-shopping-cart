import React from "react"
import "normalize.css/normalize.css"
import "../styles/App.css"
import { Provider } from "react-redux"
import store from "../redux/store"

import Sizes from "./Sizes"
import Main from "./MainPage"

function App() {
  return (
    <Provider store={store}>
      <div></div>
      <div className="whole">
        <div className="profile">
          <Sizes />
          <Main />
        </div>
      </div>
    </Provider>
  )
}

export default App
