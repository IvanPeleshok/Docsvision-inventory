import { Form, Formik } from "formik"
import React, { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { databaseSelectors } from "../../../../redux/selectors/selectors"
import { CustomButton } from "../../../Common/CustomForm/CustomButton"
import { CustomField } from "../../../Common/CustomForm/CustomField"
import { validationSchema } from "../List"
import { createInventory } from "../../../../redux/database-reducer"
import s from "../List.module.scss"

export const Create = memo(() => {
  const dispatch = useDispatch()

  // name current node (click)
  const id = useSelector(databaseSelectors.getCurrentNode)

  return (
    <>
      <div className={s.listPage}>
        <Formik
          validateOnChange={true}
          initialValues={{
            name: "",
            count: "",
          }}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(false)
            dispatch(createInventory(values.name, +values.count, id))

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
                    placeholder="Оборудование"
                    autoComplete="off"
                    className={s.input}
                  />

                  <h3 className={s.titleForObj}>Количество</h3>
                  <CustomField
                    name="count"
                    placeholder="Количество"
                    autoComplete="off"
                    className={s.input}
                  />

                  <CustomButton
                    type="submit"
                    className={s.btn}
                    text={"Добавить"}
                    isSubmitting={isSubmitting}
                  ></CustomButton>
                </div>
              </Form>
            )
          }}
        </Formik>
      </div>
    </>
  )
})
