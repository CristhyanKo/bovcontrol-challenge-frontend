import { useContext, useEffect, useState } from "react"
import { FaExclamationTriangle } from "react-icons/fa"
import { AiFillCheckCircle } from "react-icons/ai"
import { MdError } from "react-icons/md"
import { Box, Icon, Message } from "./style"
import PageContainerContext from "../../../contexts/PageContainerContext"

export default function PopAlert() {
	const { popAlertData } = useContext(PageContainerContext)
	const [color, setColor] = useState("#63A36F")
	const [icon, setIcon] = useState(null)

	useEffect(() => {
		switch (popAlertData.type) {
			case "alert":
				setColor("#F6B93F")
				setIcon(<FaExclamationTriangle color='#fff' size={20} />)
				break
			case "success":
				setColor("#63A36F")
				setIcon(<AiFillCheckCircle color='#fff' size={20} />)
				break
			case "error":
				setColor("#cc4747")
				setIcon(<MdError color='#fff' size={20} />)
				break
			default:
				setIcon(<AiFillCheckCircle color='#fff' size={20} />)
				break
		}
	}, [popAlertData.type])

	return (
		<Box color={color} className='animate__animated animate__bounceInDown '>
			<Icon>{icon}</Icon>
			<Message>{popAlertData.message}</Message>
		</Box>
	)
}
