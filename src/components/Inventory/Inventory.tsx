import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getHierarchy, getInventory } from "../../redux/database-reducer"
import { databaseSelectors } from "../../redux/selectors/selectors"
import { HeirachyContainer } from "./Heirachy/HeirachyContainer"
import s from "./Inventory.module.scss"
import { ListContainer } from "./List/ListContainer"

const Inventory = () => {
  const dispatch = useDispatch()

  const loading = useSelector(databaseSelectors.getLoader)

  useEffect(() => {
    dispatch(getHierarchy())
    dispatch(getInventory())
  }, [])


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
