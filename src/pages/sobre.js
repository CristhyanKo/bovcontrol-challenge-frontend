import { useEffect, useContext } from "react"
import PageContainerContext from "../contexts/PageContainerContext"
import PageContainer from "../components/MuuCow/PageContainer"

export default function Index() {
	const { setPageIsLoading } = useContext(PageContainerContext)

	useEffect(() => {
		setPageIsLoading(false)
	}, [])

	return <PageContainer title='Sobre'>Sobre</PageContainer>
}
