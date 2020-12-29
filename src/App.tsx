import React, { memo } from "react"
import { Redirect, Route, Switch } from "react-router"
import "./App.scss"
import { withSuspense } from "./hoc/withSuspense"
import { useSelector } from "react-redux"
import { Loader } from "./components/Common/Loader/Loader"
import { databaseSelectors } from "./redux/selectors/selectors"

const Inventory = React.lazy(() => import("./components/Inventory/Inventory"))

const App = memo(() => {
  const loader = useSelector(databaseSelectors.getLoader)

  return (
    <>
      {loader && <Loader />}
      <div className="app-content">
        <Switch>
          <Route path="/database" render={withSuspense(Inventory)} />
          <Route path="*" render={() => <Redirect to="/database" />} />
        </Switch>
      </div>
    </>
  )
})

export default App
