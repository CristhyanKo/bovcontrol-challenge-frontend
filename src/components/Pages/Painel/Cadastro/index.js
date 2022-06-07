import { useContext } from "react"
import { HiCog } from "react-icons/hi"
import { useRouter } from "next/router"
import { GiFarmer, GiFarmTractor } from "react-icons/gi"
import { TbBuildingFactory2, TbMilk, TbChecklist } from "react-icons/tb"
import MenuContext from "../../../../contexts/MenuContext"
import { Action, PainelContent } from "./style"

export default function Cadastro() {
	const route = useRouter()
	const { activePage } = useContext(MenuContext)

	return (
		<PainelContent>
			<Action onClick={() => route.push("/painel/consulta")} color={activePage.color}>
				<span>
					<GiFarmer />
				</span>
				Fazendeiro
			</Action>
			<Action onClick={() => route.push("/painel/cadastro")} color={activePage.color}>
				<span>
					<TbBuildingFactory2 />
				</span>
				Fabrica
			</Action>
			<Action onClick={() => route.push("/painel/cadastro")} color={activePage.color}>
				<span>
					<GiFarmTractor />
				</span>
				Fazenda
			</Action>
			<Action onClick={() => route.push("/painel/cadastro")} color={activePage.color}>
				<span>
					<TbMilk />
				</span>
				Produção
			</Action>
			<Action onClick={() => route.push("/painel/cadastro/checklist")} color={activePage.color}>
				<span>
					<TbChecklist />
				</span>
				Checklist
			</Action>
			<Action onClick={() => route.push("/painel/cadastro")} color={activePage.color}>
				<span>
					<HiCog />
				</span>
				Parametrizações
			</Action>
		</PainelContent>
	)
}
