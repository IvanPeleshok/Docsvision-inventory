import React, { memo } from "react"
import { CustomButton } from "../../../Common/CustomForm/CustomButton"
import { CustomField } from "../../../Common/CustomForm/CustomField"
import s from "../List.module.scss"

interface IProps {
  isSubmitting: boolean
  id: string
  handleDelete: (id: string) => void
}

export const Edit = memo<IProps>(({ isSubmitting, handleDelete, id }) => {
  return (
    <div>
      <CustomField
        name="name"
        placeholder="Имя"
        className={s.input}
        autoComplete="off"
      />

      <h3 className={s.titleForObj}>Количество</h3>

      <CustomField
        name="count"
        placeholder="Количество"
        className={s.input}
        autoComplete="off"
      />

      <div className={s.forbuttons}>
        <CustomButton
          type="submit"
          className={s.btn}
          text={"Изменить"}
          isSubmitting={isSubmitting}
        ></CustomButton>

        <button className={s.btn} onClick={() => handleDelete(id)}>
          Удалить
        </button>
      </div>
    </div>
  )
})
