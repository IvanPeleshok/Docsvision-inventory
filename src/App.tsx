import React, { memo, useEffect } from "react"
import { Switch } from "react-router"
import "./App.scss"
import { withSuspense } from "./hoc/withSuspense"
import { dataBaseAPI } from "./api/api-database"

const App = memo(() => {
  useEffect(() => {
    dataBaseAPI.getPlaces().then((response: any) => console.log(response))
    dataBaseAPI.getInventory().then((response: any) => console.log(response))
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
