import * as Yup from "yup"
import Form from "../../../../../MuuCow/Common/Form"
import InputGroup from "../../../../../MuuCow/Common/InputGroup"

export default function Supervisores({ data, width, type, onCancel, onSubmit, backButton, cols }) {
	const schema = {
		validation: Yup.object().shape({
			farmer: Yup.object().required("Supervisor é obrigatório"),
			startDate: Yup.string().required("Data inicio é obrigatório"),
		}),

		initialValues: {
			tableId: new Date().getTime(),
			surpervisor: data ? data.surpervisor._id : "",
			startDate: data ? data.startDate : "",
			endDate: data ? data.endDate : "",
			current: data ? data.current : false,
		},
	}

	return (
		<Form width={width} schema={schema} onSubmit={onSubmit} cols={cols || 0} type={type} onCancel={onCancel} backButton={backButton}>
			<InputGroup id='farmer' name='surpervisor' type='select' title='Supervisor' placeholder='Seleciona um supervisor' returnObjectFromSelect />
			<InputGroup id='startDate' name='startDate' type='datepicker' title='Data Inicio' />
			<InputGroup id='endDate' name='endDate' type='datepicker' title='Data Fim' />
			<InputGroup id='current' name='current' title='Atual' type='checkbox' placeholder='Supervisor atual' />
		</Form>
	)
}
