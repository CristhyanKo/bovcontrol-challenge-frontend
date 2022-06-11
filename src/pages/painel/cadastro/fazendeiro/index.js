import { useRouter } from "next/router"
import { useContext } from "react"
import PageContainer from "../../../../components/MuuCow/PageContainer"
import FazendeiroForm from "../../../../components/Pages/Painel/_forms/FazendeiroForm"
import PageContainerContext from "../../../../contexts/PageContainerContext"
import ServiceBase from "../../../../services/ServiceBase"
import { Form, Page } from "../../../../styles/pages/cadastro/fazendeiro/style"

export default function Fazendeiro() {
	const router = useRouter()
	const service = ServiceBase("farmer")
	const { renderPopAlert } = useContext(PageContainerContext)

	const submit = async (values) => {
		const updateDate = {
			name: values.name,
			email: values.email,
			phone: values.phone,
			isSupervisor: values.isSupervisor,
		}

		await service.store(updateDate).then(() => {
			renderPopAlert("Fazendeiro cadastrado com sucesso!", "success", 2000)
			router.push("/painel/consulta")
		})
	}
	const formWidth = "50%"

	return (
		<PageContainer title='Cadastro Fazendeiro' backButton>
			<Page>
				<h2>Cadastro de Fazendeiro</h2>
				<Form>
					<FazendeiroForm width={formWidth} type='create' onSubmit={submit} backButton />
				</Form>
			</Page>
		</PageContainer>
	)
}
