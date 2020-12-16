import React, { memo } from "react"
import { useSelector } from "react-redux"
import { databaseSelectors } from "../../../redux/selectors/selectors"
import { Formik, Form } from "formik"
import * as yup from "yup"
import { CustomField } from "../../Common/CustomForm/CustomField"
import { CustomButton } from "../../Common/CustomForm/CustomButton"
import { IInventory } from "../../../interface/database"

interface IInitialValues {
  name: string
  count: number
  //   id: string
  //   placeId: string
}

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Минимум 3 буквы")
    .max(12, "Минимум 30 букв")
    .required("Введите предмет"),
  count: yup.number().required("Введите название задачи"),
})

export const NodeData = memo(() => {
  const currentInventory = useSelector(databaseSelectors.getCurrentInventory)

  return (
    <div>
      {currentInventory.map((inventory: IInventory) => (
        <div>
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
                  <h2>Предмет</h2>

                  <CustomField
                    name="name"
                    placeholder="Имя"
                    // className={s.createInput}
                    autoComplete="off"
                  />

                  <CustomField
                    name="description"
                    placeholder="Описание задачи"
                    // className={s.createInput}
                    autoComplete="off"
                  />

                  <CustomButton
                    type="submit"
                    // className={s.createBtn}
                    text={"Изменить"}
                    isSubmitting={isSubmitting}
                  ></CustomButton>
                </Form>
              )
            }}
          </Formik>
        </div>
      ))}
    </div>
  )
})
