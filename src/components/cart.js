import React from "react"
import { useProd } from "../redux/ducks/cart"
// import Icon from "font-awsome"

export default function Cart() {
  const { zxc, products, cart, removeMerch } = useProd()

  let prices = cart.map(tee => {
    return tee.item.price
  })
  function add(a, b) {
    return a + b
  }

  function handleDelete(id) {
    removeMerch(id)
  }
  let subtotal = prices.reduce(add, 0).toFixed(2)

  return (
    <div className="cartContainer">
      {cart.map(item => {
        return (
          <div className="cartSec">
            <img src={`/assets/${item.item.sku}_2.jpg`}></img>
            <div className="colorSame">
              <div className="remove" onClick={e => handleDelete(item.id)}>
                <button className="delButt">X</button>
              </div>
              <div className="style">{item.item.title}</div>
              <div>{item.item.style}</div>
              <div className="color">${item.item.price.toFixed(2)}</div>
            </div>
          </div>
        )
      })}

      <div id="subtotal">
        <p id="tot">Subtotal</p>
        <p className="cash">${subtotal}</p>
      </div>
      <div className="priStall">
        <div> OR UP TO 5 x ${(subtotal / 5).toFixed(2)}</div>
      </div>
      <button>Checkout</button>
    </div>
  )
}
