import React, { memo } from "react"
import { useSelector } from "react-redux"
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
    <ul>
      {hierarchy.map((building: any) => (
        <>
          <li key={building.id} onClick={() => handleClick(building.id)}>
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
    <ul style={{ marginLeft: "30px" }}>
      {parts.map((node: any) => (
        <>
          <li onClick={() => handleClick(node.id)} key={node.id}>
            {node.name}
          </li>
          {node.parts && <Rooms handleClick={handleClick} parts={node.parts} />}
        </>
      ))}
    </ul>
  )
})

const Rooms = memo<ISubsidiariesProps>(({ parts, handleClick }) => {
  return (
    <ul style={{ marginLeft: "60px" }}>
      {parts.map((room: any) => (
        <li onClick={() => handleClick(room.id)} key={room.id}>
          {room.name}
        </li>
      ))}
    </ul>
  )
})
