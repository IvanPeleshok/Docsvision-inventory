import React, { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../../redux/database-reducer"
import { databaseSelectors } from "../../../redux/selectors/selectors"
import { Hierarchy } from "./Hierarchy"
import { IInventory } from "../../../interface/database"

export const HeirachyContainer = memo(() => {
  const dispatch = useDispatch()
  const hierarchy = useSelector(databaseSelectors.getHierarchy)
  const inventory = useSelector(databaseSelectors.getInventory)

  const PutAllSetsOfKeysWithData = (
    KeysFromDependencies: Array<Array<string>>
  ) => {
    let currentInventory: Array<IInventory> = []
    inventory.map((inventory: IInventory) => {
      KeysFromDependencies[0].map((key: string) => {
        if (key === inventory.placeId) {
          currentInventory.push(inventory)
        }
      })
    })
    return currentInventory
  }

  const ExtractKeysFromDependencies = (id: string) => {
    const keysForInventory: any = []
    // Get all dependency id if building was clicked
    hierarchy.map((building: any) => {
      if (building.id === id) {
        const parts = building.parts.map((node: any) => {
          const nodes = node.parts.map((room: any) => room.id)
          return nodes
        })
        keysForInventory.push(
          [
            parts.flat(),
            ...building.parts.map((item: any) => item.id),
            building.id,
          ].flat()
        )
      }
    })

    let nonEmptyArr: number = Object.keys(keysForInventory).length
    // Get all dependency ids if a node is clicked
    if (!nonEmptyArr) {
      hierarchy.map((building: any) => {
        building.parts.map((node: any) => {
          if (node.id === id) {
            keysForInventory.push([
              node.id,
              ...node.parts.map((room: any) => room.id),
            ])
          }
        })
      })
    }

    nonEmptyArr = Object.keys(keysForInventory).length
    // Get all dependency ids if a room is clicked
    if (!nonEmptyArr) {
      keysForInventory.push([id])
    }

    return keysForInventory
  }

  const handleClick = (id: string) => {
    const currentInventory = PutAllSetsOfKeysWithData(
      ExtractKeysFromDependencies(id)
    )
    dispatch(actions.setCurrentInvenory(currentInventory))
  }

  return <Hierarchy handleClick={handleClick} />
})
