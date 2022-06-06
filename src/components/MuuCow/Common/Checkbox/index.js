import { useRef, useState, useEffect } from "react"
import { BsCheckLg } from "react-icons/bs"
import { CheckboxArea, CustomCheckBox } from "./style"

export default function Checkbox({ checked, ...props }) {
	const [check, setcheck] = useState(false)

	const checkEl = useRef(null)
	useEffect(() => {
		setcheck(checked)
	}, [checked])

	return (
		<CheckboxArea>
			<input {...props} type='checkbox' ref={checkEl} checked={check} />
			<CustomCheckBox
				checked={check}
				onClick={() => {
					setcheck(!check)
				}}
			>
				{check && <BsCheckLg className='animate_animated animate__bounceIn' />}
			</CustomCheckBox>
		</CheckboxArea>
	)
}
