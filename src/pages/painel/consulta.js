import PageContainer from "../../components/MuuCow/PageContainer"
import { Consulta } from "../../components/Pages/Painel/Consulta"

export default function Index() {
	return (
		<PageContainer title='Painel' backButton>
			<Consulta />
		</PageContainer>
	)
}
