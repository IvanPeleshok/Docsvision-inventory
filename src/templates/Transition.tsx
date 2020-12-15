import React, { Component, FC, useState } from "react"
import { CSSTransition } from "react-transition-group"

const Transition: FC = () => {
  const [trigger, setTrigger] = useState<boolean>(false)
  return (
    <div>
      <CSSTransition
        in={trigger}
        timeout={500}
        mountOnEnter
        unmountOnExit
        onEnter={() => console.log("onEnter")}
        onEntering={() => console.log("onEntering")}
        onEntered={() => console.log("onEntered")}
        onExiting={() => console.log("onExiting")}
        onExited={() => console.log("onExited")}
        onExit={() => console.log("onExit")}
        classNames={{
          enterActive: "",
          enterDone: "",
          exitActive: "",
          exitDone: "",
        }}
      >
        <Component />
      </CSSTransition>
    </div>
  )
}
