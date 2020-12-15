import React, { memo, useEffect } from "react"
import { Switch } from "react-router"
import "./App.scss"
import { withSuspense } from "./hoc/withSuspense"
import { dataBaseAPI } from "./api/api-database"
import { getInventory, getPlaces } from "./redux/database-reducer"
import { useDispatch } from "react-redux"

const App = memo(() => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlaces())
    dispatch(getInventory())
  }, [])

  return (
    <>
      <div className="app-content">
        <Switch></Switch>
      </div>
    </>
  )
})

export default App
