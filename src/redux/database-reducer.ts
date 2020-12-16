import { dataBaseAPI } from "../api/api-database"
import {
  IPlace,
  IInventory,
  IPlaceResponse,
  IInventoryResponse,
  IHierarchy,
} from "../interface/database"
import { TInferActions, TBaseThunk } from "../types/redux"
import { AlertifyStatusEnum } from "../types/types"
import { showAlert } from "../utils/showAlert"

export type TInitialState = typeof initialState
type TActions = TInferActions<typeof actions>
type TThunk = TBaseThunk<TActions>

let initialState = {
  hierarchy: [] as Array<any>,
  inventory: [] as Array<IInventory>,
  currentInventory: [] as Array<IInventory>,
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
  setCurrentInvenory: (currentInventory: Array<IInventory>) =>
    ({
      type: "DATABASE/SET_CURRENT_INVENORY",
      payload: currentInventory,
    } as const),
}

export const getHierarchy = (): TThunk => async (dispatch) => {
  try {
    const response = await dataBaseAPI.getPlaces()
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
  } catch (error) {
    showAlert(AlertifyStatusEnum.error, "Не загружаются места")
  }
}

export const getInventory = (): TThunk => async (dispatch) => {
  try {
    const response = await dataBaseAPI.getInventory()
    const inventory = response.map((inventory: IInventoryResponse) => ({
      name: inventory.data.name,
      count: +inventory.data.count,
      id: inventory.id,
      placeId: inventory.placeId,
    }))
    dispatch(actions.setInventory(inventory))
  } catch (error) {
    showAlert(AlertifyStatusEnum.error, "Не загружается инвентарь")
  }
}
