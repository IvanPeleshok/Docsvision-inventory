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
  palces: [] as Array<IPlace>,
  inventory: [] as Array<IInventory>,
}

export const databaseReducer = (
  state = initialState,
  action: TActions
): TInitialState => {
  switch (action.type) {
    case "DATABASE/SET_PLACES":
      return {
        ...state,
        palces: action.payload,
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
