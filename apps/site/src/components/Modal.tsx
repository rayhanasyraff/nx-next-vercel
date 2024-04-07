'use client'

import { FC, ReactNode, useState } from "react"

interface ModalBackgroundProps {
  children: ReactNode,
  isShowing: boolean,
  onShowModal: (show: boolean) => void
}

interface ModalProps {
  children: ReactNode
}

const ModalBackground: FC<ModalBackgroundProps> = ({ children, isShowing, onShowModal }) => {

  if (isShowing) {
    return (
      <div
      className="absolute top-0 left-0 overflow-auto bg-[#00000067] w-full h-full"
      onClick={() => onShowModal(false)}>
        <div
        className="p-[24px] bg-[wheat] w-1/2 h-fit"
        style={{ margin: "12% auto" }}
        onClick={(e) => e.stopPropagation()}>
          <button onClick={() => onShowModal(false)}>Hide Modal</button>
          {children}
        </div>
      </div>
    )
  }

  return (<></>)
}

const Modal: FC<ModalProps> = ({ children }) => {
  const [show, setShowModal] = useState(false)

  return (
    <>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <ModalBackground isShowing={show} onShowModal={setShowModal}>
        {children}
      </ModalBackground>
    </>
  )
}

export default Modal
