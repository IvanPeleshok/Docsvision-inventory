import React, { memo, useEffect, useLayoutEffect } from "react"
import { Route, Switch, useHistory } from "react-router"
import "./App.scss"
import { withSuspense } from "./hoc/withSuspense"
import { getInventory, getHierarchy } from "./redux/database-reducer"
import { useDispatch, useSelector } from "react-redux"
import { Loader } from "./components/Common/Loader/Loader"
import { databaseSelectors } from "./redux/selectors/selectors"

const Inventory = React.lazy(() => import("./components/Inventory/Inventory"))

const App = memo(() => {
  const history = useHistory()

  const dispatch = useDispatch()
  const loader = useSelector(databaseSelectors.getLoader)

  useLayoutEffect(() => {
    history.push("/database")
  }, [])

  useEffect(() => {
    dispatch(getHierarchy())
    dispatch(getInventory())
  }, [])

  return (
    <>
      {loader && <Loader />}
      <div className="app-content">
        <Switch>
          <Route path="/database" render={withSuspense(Inventory)} />
        </Switch>
      </div>
    </>
  )
})

export default App
