import React, { memo } from "react"
import { IInventory } from "../../../../interface/database"
import s from "./Indicator.module.scss"

interface IProps {
  indicator: Array<IInventory>
}

export const Indicator = memo<IProps>(({ indicator }) => {
  if (indicator.length) return <NonEmptyIndicator />

  return <EmptyIndicator />
})

const EmptyIndicator = () => <div className={s.emptyIndicator}></div>

const NonEmptyIndicator = () => <div className={s.nonEmptyIndicator}></div>
