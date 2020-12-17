import { TAppState } from "../../types/redux"

export const databaseSelectors = {
  getHierarchy: (state: TAppState) => state.database.hierarchy,
  getInventory: (state: TAppState) => state.database.inventory,
  getCurrentInventory: (state: TAppState) => state.database.currentInventory,
  getCurrentNode: (state: TAppState) => state.database.currenNode,
  getCurrentName: (state: TAppState) => state.database.currenName,
  getCurrentLevel: (state: TAppState) => state.database.currenLevel,
  getLoader: (state: TAppState) => state.database.loading,
}
