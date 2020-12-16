import React from "react"
import { HeirachyContainer } from "./Heirachy/HeirachyContainer"
import { NodeData } from "./NodeData/NodeData"

const Inventory = () => {
  return (
    <div style={{ display: "gred", gridTemplateColumns: "2fr 2fr" }}>
      <HeirachyContainer />
      <NodeData />
    </div>
  )
}

export default Inventory
