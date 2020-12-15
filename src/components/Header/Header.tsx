import React, { FC, useState } from "react"
import { AlertifyStatusEnum } from "../../types/types"
import { showAlert } from "../../utils/showAlert"
import { AuthForm } from "../AuthForm/AuthForm"
import { Popup } from "../Common/Popup/Popup"
import s from "./Header.module.scss"

export const Header: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [status, setStatus] = useState<boolean>(false)

  const showSomeAlert = () => {
    if (status) {
      showAlert(AlertifyStatusEnum.success, "Данные сохранились")
      setStatus((prevState) => !prevState)
    } else {
      showAlert(AlertifyStatusEnum.error, "Что-то пошло не так")
      setStatus((prevState) => !prevState)
    }
  }
  return (
    <>
      <header className={s.header}>
        <div className={s.wrapper}>
          <div>
            <p className={s.logo}>Шаблон</p>
          </div>
          <div>
            <ul className={s.menu}>
              <li
                onClick={() => setOpen((prevState) => !prevState)}
                className={s.item}
              >
                Авторизация
              </li>
              <li className={s.item} onClick={showSomeAlert}>
                Статус
              </li>
            </ul>
          </div>
        </div>
      </header>
      {isOpen && (
        <Popup setOpen={setOpen}>
          <AuthForm />
        </Popup>
      )}
    </>
  )
}
