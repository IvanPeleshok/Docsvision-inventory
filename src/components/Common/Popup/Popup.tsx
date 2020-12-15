import React, { useEffect, useRef, memo, ReactNode } from "react"
import styled from "styled-components"

interface IProps {
  setOpen: (state: boolean) => void
  children?: ReactNode
}

export const Popup = memo<IProps>(({ setOpen, children }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener("click", (e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        e.stopPropagation()
      }
    })
    return () => {
      document.removeEventListener("click", () => {})
    }
  }, [])
  return (
    <PopupW>
      <PopupBg
        onClick={() => {
          setOpen(false)
        }}
      />
      <div ref={modalRef}>{children}</div>
    </PopupW>
  )
})

const PopupW = styled.div`
  position: relative;
  width: 100%;
`

const PopupBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #000;
  opacity: 0.3;
  z-index: 3;
`