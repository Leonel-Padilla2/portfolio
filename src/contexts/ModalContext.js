import { createContext, useState } from "react"

export const ModalContext = createContext({})

export const ModalContextProvider = ({children}) => {
  const [modalData, setModalData] = useState({visible: false, title: '', message: ''})
  const [onClose, setOnClose] = useState(
    ()=>{
      return (setModalData(current => ({...current, visible : false})))
    }
  )

  return(
    <ModalContext.Provider
      value={{
        modalData,
        setModalData,
        onClose,
        setOnClose
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}