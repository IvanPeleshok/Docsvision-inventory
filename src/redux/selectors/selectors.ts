import { TAppState } from "../../types/redux"

export const appSelectors = {
  getInitialization: (state: TAppState) => state.app.initialization,
}
