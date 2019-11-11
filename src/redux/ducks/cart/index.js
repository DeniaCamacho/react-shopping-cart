import { useEffect } from "react"
import Axios from "axios"
import { useSelector, useDispatch } from "react-redux"

//action names
const GET_PRO = "GET_PRO"
const SHOW_ITEMS = "SHOW_ITEMS"
// const ADD_TO_CART = "cart/ADD_TO_CART"
// const REMOVE_FROM_CART = "REMOVE_FROM_CART"

//reducer
const initialState = {
  products: [],
  items: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRO:
      return { ...state, items: action.payload }
    case SHOW_ITEMS:
      return { ...state, products: action.payload }
    default:
      return state
  }
}

//hook

export function useProd() {
  const dispatch = useDispatch()
  const products = useSelector(appState => appState.Reducer.products)
  const zxc = useSelector(appState => appState.Reducer.items)
  const cart = useSelector(appState => appState.Reducer.products)
  const addMerch = merch => dispatch(addToCart(merch))
  const removeMerch = id => dispatch(removeFromCart(id))
  // const fetch = () => dispatch(getProducts())

  useEffect(() => {
    dispatch(showCartItems())
    dispatch(getProducts())
  }, [dispatch])
  return { zxc, products, cart, addMerch, removeMerch }
}

//action

function getProducts() {
  return dispatch => {
    Axios.get("/products").then(resp => {
      console.log(resp)
      dispatch({
        type: GET_PRO,
        payload: resp.data
      })
    })
  }
}
function addToCart(item) {
  return dispatch => {
    Axios.post("/cart", { item }).then(resp => {
      dispatch(showCartItems(resp.data))
    })
  }
}

function removeFromCart(id) {
  return dispatch => {
    Axios.delete(`/cart/${id}`).then(resp => {
      dispatch(showCartItems(resp.data))
    })
  }
}

function showCartItems() {
  return dispatch => {
    Axios.get("/cart").then(resp => {
      dispatch({
        type: SHOW_ITEMS,
        payload: resp.data
      })
    })
  }
}
