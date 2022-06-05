import { useContext, useState } from "react"
import MenuContext from "../../../../contexts/MenuContext"
import { ConsultaContent, TabOption, Tabs } from "./style"
import FabricaTab from "./Tabs/Fabrica"
import FazendeiroTab from "./Tabs/Fazendeiro"

export function Consulta() {
	const [activeTab, setActiveTab] = useState("fazendeiro")
	const { activePage } = useContext(MenuContext)

	const handleChangeTab = (tab) => {
		setActiveTab(tab)
	}

	const renderTab = (tab) => {
		switch (tab) {
			case "fazendeiro":
				return <FazendeiroTab />
			case "fabrica":
				return <FabricaTab />
			default:
				return null
		}
	}

	return (
		<>
			<Tabs color={activePage.color}>
				<TabOption onClick={() => handleChangeTab("fazendeiro")} active={activeTab === "fazendeiro"} color={activePage.color}>
					Fazendeiro
				</TabOption>
				<TabOption onClick={() => handleChangeTab("fabrica")} active={activeTab === "fabrica"} color={activePage.color}>
					Fabrica
				</TabOption>
				<TabOption onClick={() => handleChangeTab("fazenda")} active={activeTab === "fazenda"} color={activePage.color}>
					Fazenda
				</TabOption>
				<TabOption onClick={() => handleChangeTab("producao")} active={activeTab === "producao"} color={activePage.color}>
					Produção
				</TabOption>
				<TabOption onClick={() => handleChangeTab("checklist")} active={activeTab === "checklist"} color={activePage.color}>
					Checklist
				</TabOption>
				<TabOption onClick={() => handleChangeTab("parametrizacao")} active={activeTab === "parametrizacao"} color={activePage.color}>
					Parametrizações
				</TabOption>
			</Tabs>
			<ConsultaContent>{renderTab(activeTab)}</ConsultaContent>
		</>
	)
}
