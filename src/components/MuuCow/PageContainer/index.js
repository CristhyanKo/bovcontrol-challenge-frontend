import Head from "next/head"
import { useContext, useEffect } from "react"
import { useRouter } from "next/router"
import { TiArrowBack } from "react-icons/ti"
import MenuContext from "../../../contexts/MenuContext"
import Footer from "./Footer"
import Header from "./Header"
import { BackButtom, Child, Content, Page } from "./style"
import { TableProvider } from "../../../contexts/TableContext"

export default function PageContainer({ children, title, backButton }) {
	const route = useRouter()
	const { activePage, setActivePage } = useContext(MenuContext)

	useEffect(() => {
		const path = route.pathname.split("/")[1]
		switch (path) {
			case "inicio":
				setActivePage({ page: "inicio", color: "#12b5f3" })
				break
			case "painel":
				setActivePage({ page: "painel", color: "#00ab77" })
				break
			case "metricas":
				setActivePage({ page: "metricas", color: "#f6b93f" })
				break
			case "checklist":
				setActivePage({ page: "checklist", color: "#3d31a2" })
				break
			case "sobre":
				setActivePage({ page: "sobre", color: "#A25E31" })
				break
			case "contato":
				setActivePage({ page: "contato", color: "#90a3ab" })
				break
			default:
				break
		}
	}, [])

	return (
		<>
			<Head>
				<title>MuuCow {title && ` - ${title}`}</title>
			</Head>
			<Page>
				<Header />
				<Content backButton={backButton} borderColor={activePage.color}>
					{backButton && (
						<BackButtom className='animate__animated animate__rubberBand' onClick={() => route.back()} color={activePage.color}>
							<TiArrowBack />
						</BackButtom>
					)}
					<TableProvider>
						<Child backButton={backButton}>{children}</Child>
					</TableProvider>
				</Content>
				<Footer />
			</Page>
		</>
	)
}
