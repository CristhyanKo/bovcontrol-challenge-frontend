import { ButtonBox } from "./style"

export default function Button({ children, color, type, ...props }) {
	return (
		<ButtonBox color={color} type={type} {...props}>
			{children}
		</ButtonBox>
	)
}
