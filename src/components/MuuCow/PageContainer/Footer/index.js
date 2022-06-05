import Image from "next/image"
import { FooterBar, Logo, Version } from "./style"
import logoBlack from "../../../../../public/images/logo-black.fw.png"

export default function Footer() {
	return (
		<FooterBar>
			<Logo>
				<Image src={logoBlack} alt='MuuCow Logo' height={100} width={100} objectFit='contain' />
				<span>© {new Date().getFullYear()} - Todos os direitos reservados</span>
			</Logo>
			<Version>Versão - 1.0.0</Version>
		</FooterBar>
	)
}
