import { useContext, useEffect, useState } from "react"
import { FaExclamationTriangle } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import { BsFillCheckSquareFill } from "react-icons/bs"
import { BiErrorAlt } from "react-icons/bi"

import { Area, Box, BoxContent, BoxFooter, BoxTitle, Hr, Title } from "./style"
import Button from "../Common/Button"
import ModalContext from "../../../contexts/ModalContext"

export default function AlertModal({ height }) {
	const { setShowAlertModal, alertModalData } = useContext(ModalContext)
	const [color, setColor] = useState("#63A36F")
	const [icon, setIcon] = useState(null)

	useEffect(() => {
		switch (alertModalData.type) {
			case "alert":
				setColor("#e9b407")
				setIcon(<FaExclamationTriangle color='#e9b407' size={30} />)
				break
			case "success":
				setColor("#63A36F")
				setIcon(<BsFillCheckSquareFill color='#63A36F' size={30} />)
				break
			case "error":
				setColor("#cc4747")
				setIcon(<BiErrorAlt color='#cc4747' size={30} />)
				break
			default:
				setIcon(<BsFillCheckSquareFill color='#63A36F' size={30} />)
				break
		}
	}, [alertModalData.type])

	return (
		<Area className='animate__animated animate__fadeIn'>
			<Box colorTop={color} height={height}>
				<BoxTitle>
					<Title>
						{icon} <p>{alertModalData.title}</p>
					</Title>
					<div>
						<AiOutlineClose size={27} onClick={() => setShowAlertModal(false)} />
					</div>
				</BoxTitle>

				{alertModalData.hr ? "" : <Hr />}

				<BoxContent>{alertModalData.content}</BoxContent>

				<BoxFooter>
					{alertModalData.onClose && (
						<Button mr='10px' onClick={alertModalData.onClose} width='120px'>
							Cancelar
						</Button>
					)}
					{alertModalData.onConfirm && (
						<Button color={color} onClick={alertModalData.onConfirm} width='120px'>
							Confirmar
						</Button>
					)}
				</BoxFooter>
			</Box>
		</Area>
	)
}
