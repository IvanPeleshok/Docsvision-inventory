import React, { memo, useState } from "react"
import { useSelector } from "react-redux"
import { databaseSelectors } from "../../../redux/selectors/selectors"
import { Formik, Form } from "formik"
import * as yup from "yup"
import { CustomField } from "../../Common/CustomForm/CustomField"
import { CustomButton } from "../../Common/CustomForm/CustomButton"
import { IInventory } from "../../../interface/database"
import { Create } from "./Create/Create"
import s from "./List.module.scss"

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
  count: yup.number().required("Введите название задачи"),
})

export const List = memo(() => {
  const currentInventory = useSelector(databaseSelectors.getCurrentInventory)
  const [edit, setEdit] = useState(false)
  const [create, setCreate] = useState(false)

  if (!currentInventory.length) {
    return <div className={s.notFound}>Оборудования не обноруженно</div>
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
            }}
          >
            {({ isSubmitting }) => {
              return (
                <Form>
                  <div className={s.form}>
                    <h3 className={s.titleForObj}>Название оборудования</h3>
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

                    {edit && (
                      <div className={s.forbuttons}>
                        <CustomButton
                          type="submit"
                          className={s.btn}
                          text={"Изменить"}
                          isSubmitting={isSubmitting}
                        ></CustomButton>

                        <button className={s.btn}>Удалить</button>
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
