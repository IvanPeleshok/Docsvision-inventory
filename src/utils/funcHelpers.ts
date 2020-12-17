import { IInventory } from "../interface/database"
export enum NestingLevel {
  room = "room",
  above = "above",
}

export interface IDependency {
  keys: Array<Array<string>>
  level: NestingLevel
}

export const PutAllSetsOfKeysWithData = (
  dependency: IDependency,
  inventory: any
) => {
  let currentInventory: Array<IInventory> = []
  inventory.map((inventory: IInventory) => {
    dependency.keys[0].map((key: string) => {
      if (key === inventory.placeId) {
        currentInventory.push(inventory)
      }
    })
  })
  return { currentInventory, level: dependency.level }
}

export const ExtractKeysFromDependencies = (id: string, hierarchy: any) => {
  let nestingLevel = NestingLevel.above
  let keysForInventory: any = []
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
    nestingLevel = NestingLevel.room
  }

  return { keys: keysForInventory, level: nestingLevel }
}
