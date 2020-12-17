import React, { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../../redux/database-reducer"
import { databaseSelectors } from "../../../redux/selectors/selectors"
import { Hierarchy } from "./Hierarchy"
import {
  ExtractKeysFromDependencies,
  PutAllSetsOfKeysWithData,
} from "../../../utils/funcHelpers"

export const HeirachyContainer = memo(() => {
  const dispatch = useDispatch()
  const hierarchy = useSelector(databaseSelectors.getHierarchy)
  const inventory = useSelector(databaseSelectors.getInventory)

  const handleClick = (id: string, name: string) => {
    dispatch(actions.setCurrentNode(id))
    dispatch(actions.setCurrentNameNode(name))
    const node = PutAllSetsOfKeysWithData(
      ExtractKeysFromDependencies(id, hierarchy),
      inventory
    )
    dispatch(actions.setLevelNode(node.level))
    dispatch(actions.setCurrentInvenory(node.currentInventory))
  }

  return <Hierarchy handleClick={handleClick} />
})
