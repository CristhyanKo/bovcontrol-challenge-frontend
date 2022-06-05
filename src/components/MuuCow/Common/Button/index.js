import { ButtonBox } from "./style"

export default function Button({ children, ...props }) {
	return <ButtonBox {...props}>{children}</ButtonBox>
}
