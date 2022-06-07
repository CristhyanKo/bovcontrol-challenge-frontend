import { useRouter } from "next/router"
import { useContext } from "react"
import PageContainer from "../../../../components/MuuCow/PageContainer"
import FazendaForm from "../../../../components/Pages/Painel/_forms/FazendaForm"
import MapContext from "../../../../contexts/MapContext"
import PageContainerContext from "../../../../contexts/PageContainerContext"
import ServiceBase from "../../../../services/ServiceBase"
import { Form, Page } from "./style"

export default function Fazenda() {
	const router = useRouter()
	const service = ServiceBase("farm")
	const { renderPopAlert } = useContext(PageContainerContext)
	const { latitude, longitude } = useContext(MapContext)

	const submit = async (values) => {
		const data = {
			name: values.name,
			location: {
				city: values.city,
				state: values.state,
				coordinates: {
					latitude,
					longitude,
				},
			},
			cowsHead: values.cowsHead,
			farmers: [],
			factories: [],
			supervisors: [],
		}
		await service.store(data).then(() => {
			renderPopAlert("Fazenda cadastrada com sucesso!", "success", 2000)
			router.push("/painel/consulta")
		})
	}
	const formWidth = "50%"

	return (
		<PageContainer title='Cadastro Fazenda' backButton>
			<Page>
				<h2>Cadastro de Fazenda</h2>
				<Form>
					<FazendaForm width={formWidth} type='create' onSubmit={submit} backButton />
				</Form>
			</Page>
		</PageContainer>
	)
}
