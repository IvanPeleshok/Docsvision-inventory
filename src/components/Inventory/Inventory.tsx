import React from "react"
import { HeirachyContainer } from "./Heirachy/HeirachyContainer"
import { List } from "./List/List"
import s from "./Inventory.module.scss"

const Inventory = () => {
  return (
    <div className={s.inventoryPage}>
      <div className={s.heirachy}>
        <HeirachyContainer />
      </div>
      <div className={s.nodeData}>
        <List />
      </div>
    </div>
  )
}

export default Inventory
