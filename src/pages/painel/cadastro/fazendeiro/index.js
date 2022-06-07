import PageContainer from "../../../../components/MuuCow/PageContainer"
import ChecklistForm from "../../../../components/Pages/Painel/_forms/ChecklistForm"
import { Form } from "./style"

export default function Fazendeiro() {
	return (
		<PageContainer title='Cadastro Fazendeiro'>
			<Form>
				<ChecklistForm width='60%' />
			</Form>
		</PageContainer>
	)
}
