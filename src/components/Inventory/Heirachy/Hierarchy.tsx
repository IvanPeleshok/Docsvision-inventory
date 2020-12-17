import React, { memo } from "react"
import { useSelector } from "react-redux"
import s from "./Hierachy.module.scss"
import { databaseSelectors } from "../../../redux/selectors/selectors"

interface INode {
  parts: any
}

interface IProps {
  handleClick: (id: string) => void
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
        <>
          <li
            key={building.id}
            onClick={() => handleClick(building.id)}
            className={s.building}
          >
            {building.name}
          </li>
          <Nodes handleClick={handleClick} parts={building.parts} />
        </>
      ))}
    </ul>
  )
})

interface ISubsidiariesProps {
  parts: Array<any>
  handleClick: (id: string) => void
}

const Nodes = memo<ISubsidiariesProps>(({ parts, handleClick }) => {
  return (
    <>
      {parts.map((node: any) => (
        <>
          <li
            onClick={() => handleClick(node.id)}
            key={node.id}
            className={s.nodes}
          >
            {node.name}
          </li>
          {node.parts && <Rooms handleClick={handleClick} parts={node.parts} />}
        </>
      ))}
    </>
  )
})

const Rooms = memo<ISubsidiariesProps>(({ parts, handleClick }) => {
  return (
    <>
      {parts.map((room: any) => (
        <li
          onClick={() => handleClick(room.id)}
          key={room.id}
          className={s.room}
        >
          {room.name}
        </li>
      ))}
    </>
  )
})
