import { useRouter } from "next/router"
import { useContext } from "react"
import PageContainer from "../../../../components/MuuCow/PageContainer"
import ChecklistForm from "../../../../components/Pages/Painel/_forms/ChecklistForm"
import PageContainerContext from "../../../../contexts/PageContainerContext"
import ServiceBase from "../../../../services/ServiceBase"
import { Form, Page } from "../../../../styles/pages/cadastro/checklist/style"

export default function Checklist() {
	const router = useRouter()
	const service = ServiceBase("checklist")
	const { renderPopAlert } = useContext(PageContainerContext)

	const submit = async (values) => {
		const data = {
			farm: values.farm,
			checklistType: values.checklistType,
		}

		await service.store(data).then(() => {
			renderPopAlert("Checklist cadastrado com sucesso!", "success", 2000)
			router.push("/painel/consulta")
		})
	}
	const formWidth = "50%"

	return (
		<PageContainer title='Cadastro Checklist' backButton>
			<Page>
				<h2>Cadastro de Checklist</h2>
				<Form>
					<ChecklistForm width={formWidth} type='create' onSubmit={submit} backButton />
				</Form>
			</Page>
		</PageContainer>
	)
}
