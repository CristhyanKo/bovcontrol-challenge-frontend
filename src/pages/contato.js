import { useEffect, useContext } from "react"
import PageContainer from "../components/MuuCow/PageContainer"
import PageContainerContext from "../contexts/PageContainerContext"

export default function Index() {
	const { setPageIsLoading } = useContext(PageContainerContext)

	useEffect(() => {
		setPageIsLoading(false)
	}, [])

	return <PageContainer title='Contato'>Contato</PageContainer>
}
