import { IHierarchy, IInventory, IPlace } from "../interface/database"
export enum NestingLevel {
  room = "room",
  above = "above",
}

export interface IDependency {
  keys: Array<Array<string>>
  level: NestingLevel
}

export const putAllSetsOfKeysWithData = (
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

export const extractKeysFromDependencies = (
  id: string,
  hierarchy: Array<IHierarchy>
) => {
  let nestingLevel = NestingLevel.above
  let keysForInventory: Array<Array<string>> = []

  hierarchy.forEach((node: IHierarchy) => {
    extractKeysFromDependenciesRecursion(id, node, keysForInventory)
  })

  return { keys: keysForInventory, level: nestingLevel }
}

export const extractKeysFromDependenciesRecursion = (
  id: string,
  node: IHierarchy,
  keysForInventory: Array<Array<string>>
) => {
  if (node.id === id) {
    const parts = node.parts.map((node: IHierarchy) => {
      const nodes = node.parts.map((room: IHierarchy) => room.id)
      return nodes
    })
    keysForInventory.push(
      [
        parts.flat(),
        ...(node.parts.map((item: IHierarchy) => item.id)),
        node.id,
      ].flat()
    )
  } else {
    node.parts.forEach((node: IHierarchy) => {
      extractKeysFromDependenciesRecursion(id, node, keysForInventory)
    })
  }
}

export const createHierarchyWeb = (
  hierarchy: Array<IPlace>,
  places: Array<IPlace>
): Array<IHierarchy> => {
  return hierarchy.map((node: IPlace) => extractParts(node, places))
}

export const parseNodes = (
  places: Array<IPlace>,
  part: string
): IPlace | undefined => {
  return places.find((place: IPlace) => place.id === part)
}

const extractParts = (node: IPlace, places: Array<IPlace>): IHierarchy => {
  const objNode = node.parts.map((part: string) => {
    const node = parseNodes(places, part)
    return extractParts(node!, places)
  })
  return { name: node.name, id: node.id, parts: objNode }
}
