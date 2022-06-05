import { useRouter } from "next/router"
import { useContext } from "react"
import MenuContext from "../../../../../contexts/MenuContext"
import { Box, MenuItem } from "./style"

export default function Menu() {
	const route = useRouter()
	const { activePage, setActivePage } = useContext(MenuContext)

	const handleClick = (page) => {
		setActivePage(page)
		route.push(`/${page === "inicio" ? "/" : page}`)
	}

	return (
		<Box>
			<MenuItem active={activePage === "inicio"} onClick={() => handleClick("inicio")}>
				Inicio
			</MenuItem>
			<MenuItem active={activePage === "metricas"} onClick={() => handleClick("metricas")}>
				Metricas
			</MenuItem>
			<MenuItem active={activePage === "checklist"} onClick={() => handleClick("checklist")}>
				Checklist
			</MenuItem>
			<MenuItem active={activePage === "sobre"} onClick={() => handleClick("sobre")}>
				Sobre
			</MenuItem>
			<MenuItem active={activePage === "contato"} onClick={() => handleClick("contato")}>
				Contato
			</MenuItem>
		</Box>
	)
}
