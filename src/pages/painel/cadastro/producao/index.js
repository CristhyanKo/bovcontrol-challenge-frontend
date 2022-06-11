import { useRouter } from "next/router"
import { useContext } from "react"
import PageContainer from "../../../../components/MuuCow/PageContainer"
import ProducaoForm from "../../../../components/Pages/Painel/_forms/ProducaoForm"
import PageContainerContext from "../../../../contexts/PageContainerContext"
import ServiceBase from "../../../../services/ServiceBase"
import { Form, Page } from "../../../../styles/pages/cadastro/producao/style"

export default function Producao() {
	const router = useRouter()
	const service = ServiceBase("production")
	const { renderPopAlert } = useContext(PageContainerContext)

	const submit = async (values) => {
		const data = {
			farm: values.farm,
			date: values.date,
			milkProduced: values.milkProduced,
		}

		await service.store(data).then(() => {
			renderPopAlert("Produção cadastrada com sucesso!", "success", 2000)
			router.push("/painel/consulta")
		})
	}
	const formWidth = "50%"

	return (
		<PageContainer title='Cadastro Produção' backButton>
			<Page>
				<h2>Cadastro de Produção</h2>
				<Form>
					<ProducaoForm width={formWidth} type='create' onSubmit={submit} backButton />
				</Form>
			</Page>
		</PageContainer>
	)
}
