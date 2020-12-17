import React, { memo } from "react"
import { useSelector } from "react-redux"
import s from "./Hierachy.module.scss"
import { databaseSelectors } from "../../../redux/selectors/selectors"
import {
  extractKeysFromDependencies,
  putAllSetsOfKeysWithData,
} from "../../../utils/funcHelpers"
import { IHierarchy, IInventory, IPlace } from "../../../interface/database"
import { Indicator } from "./Indicator/Indicator"

interface INode {
  parts: any
}

interface IProps {
  handleClick: (id: string, name: string) => void
}

export const Hierarchy = memo<IProps>(({ handleClick }) => {
  const hierarchy = useSelector(databaseSelectors.getHierarchy)
  const inventory = useSelector(databaseSelectors.getInventory)

  if (!hierarchy && !inventory) {
    return null
  }

  return (
    <ul className={s.hierachyPage}>
      {hierarchy.map((building: IHierarchy) => {
        const currInv = putAllSetsOfKeysWithData(
          extractKeysFromDependencies(building.id, hierarchy),
          inventory
        )
        return (
          <div key={building.name}>
            <li className={s.building}>
              <div className={s.indicator}>
                <Indicator indicator={currInv.currentInventory} />
                <p
                  onClick={() => handleClick(building.id, building.name)}
                  className={s.title}
                >
                  {building.name}
                </p>
              </div>
              <Nodes
                handleClick={handleClick}
                parts={building.parts!}
                hierarchy={hierarchy}
                inventory={inventory}
              />
            </li>
          </div>
        )
      })}
    </ul>
  )
})

interface ISubsidiariesProps {
  parts: any
  handleClick: (id: string, name: string) => void
  hierarchy: Array<any>
  inventory: Array<IInventory>
}

const Nodes = memo<ISubsidiariesProps>(
  ({ parts, handleClick, hierarchy, inventory }) => {
    return (
      <>
        {parts.map((node: any) => {
          const currInv = putAllSetsOfKeysWithData(
            extractKeysFromDependencies(node.id, hierarchy),
            inventory
          )
          return (
            <div key={node.name}>
              <ul key={node.name} className={s.nodes}>
                <div className={s.indicator}>
                  <Indicator indicator={currInv.currentInventory} />
                  <p
                    onClick={() => handleClick(node.id, node.name)}
                    className={s.subtitle}
                  >
                    {node.name}
                  </p>
                </div>
                {node.parts && (
                  <Rooms
                    handleClick={handleClick}
                    parts={node?.parts}
                    hierarchy={hierarchy}
                    inventory={inventory}
                  />
                )}
              </ul>
            </div>
          )
        })}
      </>
    )
  }
)

const Rooms = memo<ISubsidiariesProps>(
  ({ parts, handleClick, hierarchy, inventory }) => {
    return (
      <>
        {parts?.map((node: any) => {
          const currInv = putAllSetsOfKeysWithData(
            extractKeysFromDependencies(node.id, hierarchy),
            inventory
          )
          return (
            <li key={node.name} className={s.items}>
              <div className={s.indicator}>
                <Indicator indicator={currInv.currentInventory} />
                <p onClick={() => handleClick(node.id, node.name)}>
                  {node.name}
                </p>
              </div>
              <ForTheThirdNesting
                handleClick={handleClick}
                parts={node?.parts}
                hierarchy={hierarchy}
                inventory={inventory}
              />
            </li>
          )
        })}
      </>
    )
  }
)

// Additionally, if there are floors
const ForTheThirdNesting = memo<ISubsidiariesProps>(
  ({ parts, handleClick, hierarchy, inventory }) => {
    return (
      <>
        {parts?.map((node: any) => {
          const currInv = putAllSetsOfKeysWithData(
            extractKeysFromDependencies(node.id, hierarchy),
            inventory
          )
          return (
            <li key={node.name} className={s.forTheThirdNesting}>
              <div className={s.indicator}>
                <Indicator indicator={currInv.currentInventory} />
                <p onClick={() => handleClick(node.id, node.name)}>
                  {node.name}
                </p>
              </div>
            </li>
          )
        })}
      </>
    )
  }
)
