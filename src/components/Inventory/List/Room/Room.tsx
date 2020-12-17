import React, { memo } from "react"
import { IInventory } from "../../../../interface/database"
import { IDependency } from "../../../../utils/funcHelpers"
import { Create } from "../Create/Create"
import s from "../List.module.scss"

interface IProps {
  dependency: IDependency
  currenName: string
  setCreate: (value: React.SetStateAction<boolean>) => void
  create: boolean
  currentInventory: Array<IInventory>
  edit: boolean
  setEdit: (value: React.SetStateAction<boolean>) => void
}

export const Room = memo<IProps>(
  ({ currenName, currentInventory, setCreate, create, edit, setEdit }) => {
    //
    if (currentInventory.length === 0) {
      return (
        <>
          <div className={s.notFound}>
            <p className={s.itemsNotFound}>
              В выбранном помещении нет оборудования
            </p>
          </div>
          <div className={s.forbuttons}>
            <button
              onClick={() => setCreate((prevState: boolean) => !prevState)}
              className={s.btn}
            >
              Создать
            </button>
            {create && <Create setCreate={setCreate} />}
          </div>
        </>
      )
    }

    return (
      <>
        <div className={s.forbuttons}>
          <button
            onClick={() => setCreate((prevState: boolean) => !prevState)}
            className={s.btn}
          >
            Создать
          </button>
          {create && <Create setCreate={setCreate} />}
          <button
            onClick={() => setEdit((prevState) => !prevState)}
            className={s.btn}
          >
            {edit ? "Выйти из режима редактировния" : "Режим редактирования"}
          </button>
        </div>
      </>
    )
  }
)
