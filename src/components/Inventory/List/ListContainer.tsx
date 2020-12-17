import React, { memo, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { databaseSelectors } from "../../../redux/selectors/selectors"
import s from "./List.module.scss"
import {
  updateInventory,
  removeInventory,
} from "../../../redux/database-reducer"
import { ExtractKeysFromDependencies } from "../../../utils/funcHelpers"
import { List } from "./List"

export const ListContainer = memo(() => {
  const dispatch = useDispatch()
  const currentInventory = useSelector(databaseSelectors.getCurrentInventory)
  const currenNode = useSelector(databaseSelectors.getCurrentNode)
  const currenName = useSelector(databaseSelectors.getCurrentName)
  const hierarchy = useSelector(databaseSelectors.getHierarchy)

  const dependency = ExtractKeysFromDependencies(currenNode, hierarchy)

  const [edit, setEdit] = useState(false)
  const [create, setCreate] = useState(false)

  useEffect(() => {}, [dependency])

  const handleDelete = (id: string) => {
    dispatch(removeInventory(id))
    setEdit(false)
  }

  // const handleUpdate = (id: string) => {
  //   dispatch(updateInventory)
  //   setEdit(false)
  // }

  if (!currentInventory.length && !currenNode) {
    return <div className={s.notFound}>Необходимо сделать выбор</div>
  }

  return (
    <List
      currenNode={currenNode}
      currenName={currenName}
      dependency={dependency}
      create={create}
      setCreate={setCreate}
      edit={edit}
      setEdit={setEdit}
      currentInventory={currentInventory}
      handleDelete={handleDelete}
      // handleUpdate={handleUpdate}
    />
  )
})
