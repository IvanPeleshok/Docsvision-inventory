import { dataBaseAPI } from "../api/api-database"
import {
  IPlace,
  IInventory,
  IPlaceResponse,
  IInventoryResponse,
} from "../interface/database"
import { TInferActions, TBaseThunk } from "../types/redux"
import { AlertifyStatusEnum } from "../types/types"
import { showAlert } from "../utils/showAlert"

export type TInitialState = typeof initialState
type TActions = TInferActions<typeof actions>
type TThunk = TBaseThunk<TActions>

let initialState = {
  places: [] as Array<IPlace>,
  inventory: [] as Array<IInventory>,
  hierarchy: [] as Array<any>,
}

export const databaseReducer = (
  state = initialState,
  action: TActions
): TInitialState => {
  switch (action.type) {
    case "DATABASE/SET_PLACES":
      const places = action.payload

      let hierarchy: Array<any> = []

      // Building search
      action.payload.forEach((place: IPlace) => {
        if (place.id.indexOf("-") === -1) {
          hierarchy.push({ id: place.id, parts: place.parts })
        }
      })
      // Search for dependencies on parts
      const hierarchyWithNodes = hierarchy.map((building: any) => {
        const objNode = building.parts.map((part: string) => {
          const node = places.find((place: IPlace) => place.id === part)
          // Search for dependencies for rooms
          const objRoom = node?.parts?.map((part: string) => {
            const room = places.find((place: IPlace) => place.id === part)
            return room
          })
          return { name: node?.name, id: node?.id, parts: objRoom }
        })
        return { id: building.id, parts: objNode }
      })
      // I tried to find the optimal algorithm, but I had to write my own (non-optimal)

      return {
        ...state,
        places,
        hierarchy: hierarchyWithNodes,
      }
    case "DATABASE/SET_INVENTORY":
      return {
        ...state,
        inventory: action.payload,
      }
    default:
      return state
  }
}

export const actions = {
  setPlaces: (palces: Array<IPlace>) =>
    ({
      type: "DATABASE/SET_PLACES",
      payload: palces,
    } as const),
  setInventory: (inventory: Array<IInventory>) =>
    ({
      type: "DATABASE/SET_INVENTORY",
      payload: inventory,
    } as const),
}

export const getPlaces = (): TThunk => async (dispatch) => {
  try {
    const response = await dataBaseAPI.getPlaces()
    const places = response.map((place: IPlaceResponse) => ({
      name: place.data.name,
      id: place.id,
      parts: place.parts,
    }))
    dispatch(actions.setPlaces(places))
  } catch (error) {
    console.log(error)
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
