import { TInferActions, TBaseThunk } from "../types/redux"

export type TInitialState = typeof initialState
type TActions = TInferActions<typeof actions>
type TThunk = TBaseThunk<TActions>

let initialState = {}

export const templateReducer = (
  state = initialState,
  action: TActions
): TInitialState => {
  switch (action.type) {
    case "":
      return {
        ...state,
      }
    default:
      return state
  }
}

export const actions = {
  setAction: (some: any) =>
    ({
      type: "",
      payload: some,
    } as const),
}

// export const someThunk = (): TThunk => async (dispatch) => {
//   try {
//     const response = await API.getSome() as AxiosResponse
//     dispatch(actions.setAction)
//   } catch (error) {
//     console.log("An error has occurred")
//   }
// }
