import React, { useContext } from "react"
import { AiOutlineClose } from "react-icons/ai"
import ModalContext from "../../../contexts/ModalContext"
import Button from "../Common/Button"
import { Area, Box, BoxContent, BoxFooter, BoxHeader, Hr, Title } from "./style"

export default function Modal() {
	const { setShowModal, modalData } = useContext(ModalContext)

	const handleCloseButtom = () => {
		setShowModal(false)
	}

	return (
		<Area>
			<Box className='animate__animated animate__backInUp animate__faster' width={modalData.width}>
				<BoxHeader>
					<Title>
						<h2>{modalData.title}</h2>
						<h4>{modalData.subtitle}</h4>
					</Title>{" "}
					<AiOutlineClose size='25px' onClick={handleCloseButtom} />
				</BoxHeader>
				<Hr />
				<BoxContent height={modalData.height}>{modalData.content}</BoxContent>
				{modalData.hr ? "" : <Hr m={20} />}
				<BoxFooter>
					{modalData.onClose && (
						<Button onClick={modalData.onClose} width='120px'>
							Cancelar
						</Button>
					)}
					{modalData.onConfirm && (
						<Button color='#00AB77' onClick={modalData.onConfirm} width='120px'>
							{modalData.confirmText || "Confirmar"}
						</Button>
					)}
				</BoxFooter>
			</Box>
		</Area>
	)
}
