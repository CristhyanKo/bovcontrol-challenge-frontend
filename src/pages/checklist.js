import { useEffect, useContext } from "react"
import PageContainer from "../components/MuuCow/PageContainer"
import Checklist from "../components/Pages/Checklist"
import PageContainerContext from "../contexts/PageContainerContext"

export default function Index() {
	const { setPageIsLoading } = useContext(PageContainerContext)

	useEffect(() => {
		setPageIsLoading(false)
	}, [])

	return (
		<PageContainer title='Checklist'>
			<Checklist />
		</PageContainer>
	)
}
