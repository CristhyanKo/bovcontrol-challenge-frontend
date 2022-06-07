import PageContainer from "../../../../components/MuuCow/PageContainer"
import ChecklistForm from "../../../../components/Pages/Painel/_forms/ChecklistForm"
import { Form } from "./style"

export default function Checklist() {
	return (
		<PageContainer title='Cadastro Checklist' backButton>
			<Form>
				<ChecklistForm width='60%' />
			</Form>
		</PageContainer>
	)
}
