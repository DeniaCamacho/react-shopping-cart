import React from "react"
// import { useSelector } from 'react-redux'
import { useProd } from "../redux/ducks/Reducer"

export default function MainStore() {
  const { zxc } = useProd()

  return (
    <div>
      {zxc.map(Sitem => {
        return <div>{Sitem.title}</div>
      })}
    </div>
  )
}
