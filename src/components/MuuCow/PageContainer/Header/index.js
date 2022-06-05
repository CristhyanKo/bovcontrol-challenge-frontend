import Image from "next/image"
import logo from "../../../../../public/images/logo.png"
import Menu from "./Menu"
import { Logo, TopBar } from "./style"

export default function Header() {
	return (
		<TopBar>
			<Logo>
				<Image src={logo} alt='MuuCow Logo' height={500} objectFit='contain' />
			</Logo>

			<Menu />
		</TopBar>
	)
}
