import { useRouter } from "next/router"
import { useContext } from "react"
import PageContainer from "../../../../components/MuuCow/PageContainer"
import FabricaForm from "../../../../components/Pages/Painel/_forms/FabricaForm"
import MapContext from "../../../../contexts/MapContext"
import PageContainerContext from "../../../../contexts/PageContainerContext"
import ServiceBase from "../../../../services/ServiceBase"
import { Form, Page } from "../../../../styles/pages/cadastro/fabrica/style"

export default function Fabrica() {
	const router = useRouter()
	const service = ServiceBase("factory")
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
		}
		await service.store(data).then(() => {
			renderPopAlert("Fábrica cadastrada com sucesso!", "success", 2000)
			router.push("/painel/consulta")
		})
	}
	const formWidth = "50%"

	return (
		<PageContainer title='Cadastro Fábrica' backButton>
			<Page>
				<h2>Cadastro de Fábrica</h2>
				<Form>
					<FabricaForm width={formWidth} type='create' onSubmit={submit} backButton />
				</Form>
			</Page>
		</PageContainer>
	)
}
