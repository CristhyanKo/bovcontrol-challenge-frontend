import { ButtonBox } from "./style"

export default function Button({ children, color, ...props }) {
	return (
		<ButtonBox color={color} {...props}>
			{children}
		</ButtonBox>
	)
}
