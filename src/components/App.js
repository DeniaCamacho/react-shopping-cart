import React from "react"
import "normalize.css/normalize.css"
import "../styles/App.css"
import { Provider } from "react-redux"
import store from "../redux/store"

import Sizes from "./Sizes"

// import Button from "./Button"
import MainStore from "./MainStore"

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <Button /> */}
        <div className="profile">
          <Sizes />
          <MainStore />
        </div>
      </div>
    </Provider>
  )
}

export default App
