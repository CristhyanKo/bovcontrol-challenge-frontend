import * as Yup from "yup"
import Form from "../../../../../MuuCow/Common/Form"
import InputGroup from "../../../../../MuuCow/Common/InputGroup"

export default function Fazendeiro({ data, width, type, onCancel, onSubmit, backButton, cols, setFieldValue }) {
	const schema = {
		validation: Yup.object().shape({
			farmer: Yup.object().required("Fazendeiro é obrigatório"),
			startDate: Yup.string().required("Data inicio é obrigatório"),
		}),

		initialValues: {
			tableId: new Date().getTime(),
			farmer: data ? data.farmer._id : "",
			startDate: data ? data.startDate : "",
			endDate: data ? data.endDate : "",
			current: data ? data.current : false,
		},
	}

	return (
		<Form
			width={width}
			schema={schema}
			onSubmit={(vals) => onSubmit(vals, setFieldValue)}
			cols={cols || 0}
			type={type}
			onCancel={onCancel}
			backButton={backButton}
		>
			<InputGroup id='farmer' name='farmer' type='select' title='Fazendeiro' placeholder='Seleciona um fazendeiro' returnObjectFromSelect />
			<InputGroup id='startDate' name='startDate' type='datepicker' title='Data Inicio' />
			<InputGroup id='endDate' name='endDate' type='datepicker' title='Data Fim' />
			<InputGroup id='current' name='current' title='Atual' type='checkbox' placeholder='Fazendeiro atual' />
		</Form>
	)
}
