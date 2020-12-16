import { Form, Formik } from "formik"
import React, { memo } from "react"
import { CustomButton } from "../../../Common/CustomForm/CustomButton"
import { CustomField } from "../../../Common/CustomForm/CustomField"
import { validationSchema } from "../List"
import s from "../List.module.scss"

export const Create = memo(() => {
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
                    // className={s.createInput}
                    autoComplete="off"
                    className={s.input}
                  />

                  <h3 className={s.titleForObj}>Количество</h3>
                  <CustomField
                    name="count"
                    placeholder="Количество"
                    // className={s.createInput}
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
