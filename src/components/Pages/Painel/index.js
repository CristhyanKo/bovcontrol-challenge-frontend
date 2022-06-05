import { useContext } from "react"
import { BiSearchAlt } from "react-icons/bi"
import { HiOutlineViewGridAdd } from "react-icons/hi"
import { useRouter } from "next/router"
import MenuContext from "../../../contexts/MenuContext"
import { Action, PainelContent } from "./style"

export default function Painel() {
	const route = useRouter()
	const { activePage } = useContext(MenuContext)

	return (
		<PainelContent>
			<Action onClick={() => route.push("/painel/consulta")} color={activePage.color}>
				<span>
					<BiSearchAlt />
				</span>
				Consulta
			</Action>
			<Action onClick={() => route.push("/painel/cadastro")} color={activePage.color}>
				<span>
					<HiOutlineViewGridAdd />
				</span>
				Cadastro
			</Action>
		</PainelContent>
	)
}
