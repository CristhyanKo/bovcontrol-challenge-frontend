import { createContext, useState } from "react"

const ModalContext = createContext()

export function ModalProvider({ children }) {
	const [showModal, setShowModal] = useState(false)
	const [modalData, setModalData] = useState({})
	const [modalFormData, setModalFormData] = useState({})
	const [showAlertModal, setShowAlertModal] = useState(false)
	const [alertModalData, setAlertModalData] = useState({})
	const [onConfirmAlertData, setOnConfirmAlertData] = useState(false)

	return (
		<ModalContext.Provider
			value={{
				showModal,
				setShowModal,
				modalData,
				setModalData,
				modalFormData,
				setModalFormData,
				showAlertModal,
				setShowAlertModal,
				alertModalData,
				setAlertModalData,
				onConfirmAlertData,
				setOnConfirmAlertData,
			}}
		>
			{children}
		</ModalContext.Provider>
	)
}

export const ModalConsumer = ModalContext.Consumer
export default ModalContext
