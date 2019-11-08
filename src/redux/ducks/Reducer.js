import { useEffect } from "react"
import Axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { resolve } from "dns"

//action names
const GET_PRO = "GET_PRO"

const ADD_TO_CART = "cart/ADD_TO_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"

//reducer
const initialState = {
  products: [],
  items: []
}

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRO:
      return { ...state, items: action.payload }
    case ADD_TO_CART:
      return { ...state, products: action.payload }
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: action.payload.filter(
          product => product.id !== action.payload
        )
      }
    default:
      return state
  }
}

//hook

export function useProd() {
  const dispatch = useDispatch()
  // const products = useSelector(appState => appState.Reducer.products)
  const zxc = useSelector(appState => appState.Reducer.items)

  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return { zxc }
}

//action

export function addToCart() {
  return dispatch => {
    Axios.post("/cart", {}).then(resp => {
      dispatch({
        typee: ADD_TO_CART,
        payload: resolve.data
      })
    })
  }
}

export function getProducts() {
  return dispatch => {
    Axios.get("/products").then(resp => {
      dispatch({
        tyoe: GET_PRO,
        payload: Response.data
      })
    })
  }
}
