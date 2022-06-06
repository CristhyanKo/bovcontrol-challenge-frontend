import { useEffect, useContext } from "react"
import PageContainer from "../components/MuuCow/PageContainer"
import Inicio from "../components/Pages/Inicio"
import PageContainerContext from "../contexts/PageContainerContext"

export default function Index() {
	const { setPageIsLoading } = useContext(PageContainerContext)

	useEffect(() => {
		setPageIsLoading(false)
	}, [])

	return (
		<PageContainer title='Inicio'>
			<Inicio />
		</PageContainer>
	)
}
