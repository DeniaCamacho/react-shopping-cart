import React, { useState } from "react"
// import { useSelector } from 'react-redux'
import { useProd } from "../redux/ducks/cart"
import "semantic-ui-css/semantic.min.css"
import { Button, Menu, Sidebar } from "semantic-ui-react"
import Cart from "./cart"

export default function Main() {
  const { zxc, addMerch } = useProd()
  const [visible, setVisible] = useState(false)

  function handleAdd(im) {
    addMerch(im)
  }

  return (
    <div className="mainContainer">
      <Button
        icon="shop"
        onClick={e => (!visible ? setVisible(true) : setVisible(false))}
        className="cart"
        secondary
      />
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={visible}
          direction="right"
          id="sidebar"
        >
          <Cart />
        </Sidebar>
        <Sidebar.Pusher>
          {zxc.map(item => {
            return (
              <div id="merchShy">
                <div className="merchInnerBoxes">
                  <img
                    className="maimPic"
                    src={`/assets/${item.sku}_1.jpg`}
                  ></img>
                  <div className="merchTitle">{item.title}</div>
                  <div class="priceBig">${item.price.toFixed(2)}</div>
                  <div className="orPrice">or</div>
                  <div className="priceColors">
                    {item.installments} x $
                    {(item.price / item.installments).toFixed(2)}{" "}
                  </div>
                  <div className="Button" onClick={e => handleAdd(item)}>
                    <button>Add to Cart</button>
                  </div>
                </div>
              </div>
            )
          })}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  )
}
