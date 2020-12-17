import React, { memo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { databaseSelectors } from "../../../redux/selectors/selectors"
import { Formik, Form } from "formik"
import * as yup from "yup"
import { CustomField } from "../../Common/CustomForm/CustomField"
import { CustomButton } from "../../Common/CustomForm/CustomButton"
import { IInventory } from "../../../interface/database"
import { Create } from "./Create/Create"
import s from "./List.module.scss"
import {
  updateInventory,
  removeInventory,
} from "../../../redux/database-reducer"

export interface IInitialValues {
  name: string
  count: number
}

export const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Минимум 3 буквы")
    .max(30, "Максимум 30 букв")
    .required("Введите предмет"),
  count: yup
    .number()
    .typeError("Только цифры")
    .required("Введите название задачи"),
})

export const List = memo(() => {
  const dispatch = useDispatch()

  const currentInventory = useSelector(databaseSelectors.getCurrentInventory)
  const currenNode = useSelector(databaseSelectors.getCurrentNode)
  const [edit, setEdit] = useState(false)
  const [create, setCreate] = useState(false)

  if (!currentInventory.length && !currenNode) {
    return (
      <>
        <div className={s.notFound}>Необходимо сделать выбор</div>
      </>
    )
  } else if (!currentInventory.length) {
    return (
      <>
        <div className={s.notFound}>
          Оборудования не обноруженно в {currenNode}
        </div>
        <Create />
      </>
    )
  }

  const handleDelete = (id: string) => {
    dispatch(removeInventory(id))
  }

  return (
    <>
      <h2 className={s.title}>Оборудование</h2>
      {currentInventory.map((inventory: IInventory) => (
        <div className={s.listPage}>
          <Formik
            validateOnChange={true}
            initialValues={{
              name: inventory.name,
              count: inventory.count,
            }}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              setSubmitting(false)
              resetForm()
              dispatch(updateInventory(inventory.id, values.count))
            }}
          >
            {({ isSubmitting }) => {
              return (
                <Form>
                  <div className={s.form}>
                    <h3 className={s.titleForObj}>Название оборудования</h3>
                    <CustomField
                      disabled
                      name="name"
                      placeholder="Имя"
                      className={s.input}
                      autoComplete="off"
                    />

                    <h3 className={s.titleForObj}>Количество</h3>
                    {edit ? (
                      <CustomField
                        name="count"
                        placeholder="Количество"
                        className={s.input}
                        autoComplete="off"
                      />
                    ) : (
                      <CustomField
                        disabled
                        name="count"
                        placeholder="Количество"
                        className={s.input}
                        autoComplete="off"
                      />
                    )}

                    {edit && (
                      <div className={s.forbuttons}>
                        <CustomButton
                          type="submit"
                          className={s.btn}
                          text={"Изменить"}
                          isSubmitting={isSubmitting}
                        ></CustomButton>

                        <button
                          className={s.btn}
                          onClick={() => handleDelete(inventory.id)}
                        >
                          Удалить
                        </button>
                      </div>
                    )}
                  </div>
                </Form>
              )
            }}
          </Formik>
        </div>
      ))}

      <div>
        <button
          onClick={() => setEdit((prevState) => !prevState)}
          className={s.btn}
        >
          {edit ? "Выйти из режима редактировния" : "Режим редактирования"}
        </button>
        <button
          onClick={() => setCreate((prevState) => !prevState)}
          className={s.btn}
        >
          Создать
        </button>
        {create && <Create />}
      </div>
    </>
  )
})
