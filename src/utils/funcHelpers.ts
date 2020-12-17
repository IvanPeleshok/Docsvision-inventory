import { IInventory } from "../interface/database"

export const PutAllSetsOfKeysWithData = (
  KeysFromDependencies: Array<Array<string>>,
  inventory: any
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

export const ExtractKeysFromDependencies = (id: string, hierarchy: any) => {
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
