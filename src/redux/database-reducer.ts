import { databaseAPI } from "../api/api-database"
import {
  IPlace,
  IInventory,
  IPlaceResponse,
  IInventoryResponse,
  IHierarchy,
} from "../interface/database"
import { TInferActions, TBaseThunk } from "../types/redux"

export type TInitialState = typeof initialState
type TActions = TInferActions<typeof actions>
type TThunk = TBaseThunk<TActions>

let initialState = {
  hierarchy: [] as Array<any>,
  inventory: [] as Array<IInventory>,
  currentInventory: [] as Array<IInventory>,
  currenNode: "" as string,
}

export const databaseReducer = (
  state = initialState,
  action: TActions
): TInitialState => {
  switch (action.type) {
    case "DATABASE/SET_HEIRARCHY":
      return {
        ...state,
        hierarchy: action.payload,
      }
    case "DATABASE/SET_INVENTORY":
      return {
        ...state,
        inventory: action.payload,
      }
    case "DATABASE/SET_CURRENT_NODE":
      return {
        ...state,
        currenNode: action.payload,
      }
    case "DATABASE/CREATE_INVENTORY":
      return {
        ...state,
        inventory: [...state.inventory, action.payload],
        currentInventory: [...state.currentInventory, action.payload],
      }
    case "DATABASE/SET_CURRENT_INVENORY":
      return {
        ...state,
        currentInventory: action.payload,
      }
    default:
      return state
  }
}

export const actions = {
  setHierarchy: (hierarchy: Array<any>) =>
    ({
      type: "DATABASE/SET_HEIRARCHY",
      payload: hierarchy,
    } as const),
  setInventory: (inventory: Array<IInventory>) =>
    ({
      type: "DATABASE/SET_INVENTORY",
      payload: inventory,
    } as const),
  setCurrentNode: (node: string) =>
    ({
      type: "DATABASE/SET_CURRENT_NODE",
      payload: node,
    } as const),
  createInventory: (inventory: IInventory) =>
    ({
      type: "DATABASE/CREATE_INVENTORY",
      payload: inventory,
    } as const),
  setCurrentInvenory: (currentInventory: Array<IInventory>) =>
    ({
      type: "DATABASE/SET_CURRENT_INVENORY",
      payload: currentInventory,
    } as const),
}

export const getHierarchy = (): TThunk => async (dispatch) => {
  try {
    const response = await databaseAPI.getPlaces()
    const places = response.map((place: IPlaceResponse) => ({
      name: place.data.name,
      id: place.id,
      parts: place.parts === undefined ? [] : place.parts,
    }))

    let hierarchy: Array<any> = []
    // Building search
    places.forEach((place: IPlace) => {
      if (place.id.indexOf("-") === -1) {
        hierarchy.push({ id: place.id, parts: place.parts, name: place.name })
      }
    })
    // Search for dependencies on parts
    const hierarchyWithNodes = hierarchy.map((building: IHierarchy) => {
      // Search for dependencies for node
      const objNode = building.parts?.map((part: string) => {
        const node = places.find((place: IPlace) => place.id === part)
        // Search for dependencies for rooms
        const objRoom = node?.parts?.map((part: string) => {
          const room = places.find((place: IPlace) => place.id === part)
          return room
        })
        return { name: node?.name, id: node?.id, parts: objRoom }
      })
      return { id: building.id, parts: objNode, name: building.name }
    })

    dispatch(actions.setHierarchy(hierarchyWithNodes))
  } catch (error) {}
}

export const getInventory = (): TThunk => async (dispatch) => {
  try {
    const response = await databaseAPI.getInventory()
    const inventory = response?.map((inventory: IInventoryResponse) => ({
      name: inventory.data.name,
      count: +inventory.data.count,
      id: inventory.id,
      placeId: inventory.placeId,
    }))
    dispatch(actions.setInventory(inventory))
  } catch (error) {}
}

export const createInventory = (
  name: string,
  count: number,
  id: string
): TThunk => async (dispatch) => {
  try {
    await databaseAPI.createInventory(name, count, id)
    dispatch(actions.createInventory({ placeId: id, count, id, name }))
  } catch (error) {}
}

export const updateInventory = (id: string, count: number): TThunk => async (
  dispatch
) => {
  try {
    const response = await databaseAPI.updateInventory(id, count)
    console.log(response)
  } catch (error) {}
}

export const removeInventory = (id: string): TThunk => async (dispatch) => {
  try {
    const response = await databaseAPI.deleteInventory(id)
    console.log(response)
  } catch (error) {}
}
