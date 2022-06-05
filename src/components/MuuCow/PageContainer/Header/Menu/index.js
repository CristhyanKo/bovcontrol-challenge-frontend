import { useRouter } from "next/router"
import { useContext } from "react"
import MenuContext from "../../../../../contexts/MenuContext"
import { Box, MenuItem } from "./style"

export default function Menu() {
	const route = useRouter()
	const { activePage, setActivePage } = useContext(MenuContext)

	const handleClick = (item) => {
		setActivePage({
			page: item.page,
			color: item.color,
		})
		route.push(`/${item.page === "inicio" ? "/" : item.page}`)
	}

	return (
		<Box>
			<MenuItem active={activePage.page === "inicio"} color='#12b5f3' onClick={() => handleClick({ page: "inicio", color: "#12b5f3" })}>
				Inicio
			</MenuItem>
			<MenuItem active={activePage.page === "painel"} color='#00ab77' onClick={() => handleClick({ page: "painel", color: "#00ab77" })}>
				Painel
			</MenuItem>
			<MenuItem active={activePage.page === "metricas"} color='#f6b93f' onClick={() => handleClick({ page: "metricas", color: "#f6b93f" })}>
				Metricas
			</MenuItem>
			<MenuItem active={activePage.page === "checklist"} color='#3d31a2' onClick={() => handleClick({ page: "checklist", color: "#3d31a2" })}>
				Checklist
			</MenuItem>
			<MenuItem active={activePage.page === "sobre"} color='#A25E31' onClick={() => handleClick({ page: "sobre", color: "#A25E31" })}>
				Sobre
			</MenuItem>
			<MenuItem active={activePage.page === "contato"} color='#90a3ab' onClick={() => handleClick({ page: "contato", color: "#90a3ab" })}>
				Contato
			</MenuItem>
		</Box>
	)
}
