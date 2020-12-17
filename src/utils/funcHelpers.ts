import { IHierarchy, IInventory, IPlace } from "../interface/database"
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
  inventory: Array<IInventory>
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

export const ExtractKeysFromDependencies = (
  id: string,
  hierarchy: Array<IHierarchy>
) => {
  console.log(hierarchy)
  let nestingLevel = NestingLevel.above
  let keysForInventory: any = []
  // Get all dependency id if building was clicked
  // Zero nesting
  hierarchy.map((building: IHierarchy) => {
    if (building.id === id) {
      const parts = building.parts?.map((node: any) => {
        const nodes = node.parts?.map((room: any) => room.id)
        return nodes
      })
      keysForInventory.push(
        [
          parts?.flat(),
          ...building.parts!.map((item: any) => item.id),
          building.id,
        ].flat()
      )
    }
  })

  // First nesting
  let nonEmptyArr: number = Object.keys(keysForInventory).length
  if (!nonEmptyArr) {
    hierarchy.forEach((node: IHierarchy) => {
      node.parts?.forEach((node: any) => {
        if (node.id === id) {
          const parts = node.parts?.map((node: IHierarchy) => {
            const nodes = node.parts?.map((room: any) => room.id)
            return nodes
          })
          keysForInventory.push(
            [
              parts?.flat(),
              ...(node.parts?.map((item: IHierarchy) => item.id) ?? []),
              node.id,
            ].flat()
          )
        }
      })
    })
  }

  // Second nesting
  nonEmptyArr = Object.keys(keysForInventory).length
  // Get all dependency ids if a node is clicked
  nonEmptyArr = Object.keys(keysForInventory).length
  if (!nonEmptyArr) {
    hierarchy.forEach((node: IHierarchy) => {
      node.parts?.forEach((node: any) => {
        node.parts?.forEach((node: IHierarchy) => {
          if (node.id === id) {
            const parts = node.parts?.map((node: any) => {
              const nodes = node.parts?.map((room: any) => room.id)
              return nodes
            })
            keysForInventory.push(
              [
                parts?.flat(),
                ...(node.parts?.map((item: any) => item.id) ?? []),
                node.id,
              ].flat()
            )
          }
        })
      })
    })
  }

  // Third nesting
  nonEmptyArr = Object.keys(keysForInventory).length
  // Get all dependency ids if a room is clicked
  if (!nonEmptyArr) {
    keysForInventory.push([id])
    nestingLevel = NestingLevel.room
  }

  return { keys: keysForInventory, level: nestingLevel }
}

export const ParseNodes = (places: Array<IPlace>, part: string): any => {
  return places.find((place: IPlace) => place.id === part)
}

export const ParseTheAnswerToTheHierarchyLastNode = (
  node: any,
  places: Array<IPlace>
) => {
  const objNode = node?.parts?.map((part: string) => {
    const room = places.find((place: IPlace) => place.id === part)
    return room
  })
  return objNode
}
