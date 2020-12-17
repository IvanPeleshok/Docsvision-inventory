import React from "react"
import { HeirachyContainer } from "./Heirachy/HeirachyContainer"
import s from "./Inventory.module.scss"
import { ListContainer } from "./List/ListContainer"

const Inventory = () => {
  return (
    <div className={s.inventoryPage}>
      <div className={s.heirachy}>
        <HeirachyContainer />
      </div>
      <div className={s.nodeData}>
        <ListContainer />
      </div>
    </div>
  )
}

export default Inventory
