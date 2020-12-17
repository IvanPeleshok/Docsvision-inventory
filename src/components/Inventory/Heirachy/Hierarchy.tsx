import React, { memo } from "react"
import { useSelector } from "react-redux"
import s from "./Hierachy.module.scss"
import { databaseSelectors } from "../../../redux/selectors/selectors"

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
      {hierarchy.map((building: any) => (
        <div key={building.name}>
          <li className={s.building}>
            <p
              onClick={() => handleClick(building.id, building.name)}
              className={s.title}
            >
              {building.name}
            </p>
            <Nodes handleClick={handleClick} parts={building.parts} />
          </li>
        </div>
      ))}
    </ul>
  )
})

interface ISubsidiariesProps {
  parts: Array<any>
  handleClick: (id: string, name: string) => void
}

const Nodes = memo<ISubsidiariesProps>(({ parts, handleClick }) => {
  return (
    <>
      {parts.map((node: any) => (
        <div key={node.name}>
          <ul key={node.name} className={s.nodes}>
            <p
              onClick={() => handleClick(node.id, node.name)}
              className={s.subtitle}
            >
              {node.name}
            </p>
            {node.parts && (
              <Rooms handleClick={handleClick} parts={node.parts} />
            )}
          </ul>
        </div>
      ))}
    </>
  )
})

const Rooms = memo<ISubsidiariesProps>(({ parts, handleClick }) => {
  return (
    <>
      {parts.map((room: any) => (
        <li key={room.name} className={s.items}>
          <p onClick={() => handleClick(room.id, room.name)}>{room.name}</p>
        </li>
      ))}
    </>
  )
})
