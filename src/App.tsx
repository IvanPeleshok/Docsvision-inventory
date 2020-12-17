import React, { memo, useEffect } from "react"
import { Route, Switch } from "react-router"
import "./App.scss"
import { withSuspense } from "./hoc/withSuspense"
import {
  getInventory,
  getHierarchy,
  removeInventory,
} from "./redux/database-reducer"
import { useDispatch } from "react-redux"
import Inventory from "./components/Inventory/Inventory"

const App = memo(() => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHierarchy())
    dispatch(getInventory())
    dispatch(removeInventory("YIN4QE1lOmiCYojwlrPH"))
  }, [])

  return (
    <>
      <div className="app-content">
        <Switch>
          <Route path="/" render={() => <Inventory />} />
        </Switch>
      </div>
    </>
  )
})

export default App
