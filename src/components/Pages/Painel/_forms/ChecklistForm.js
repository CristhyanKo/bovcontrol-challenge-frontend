import * as Yup from "yup"
import Form from "../../../MuuCow/Common/Form"
import InputGroup from "../../../MuuCow/Common/InputGroup"

export default function ProducaoForm({ data, width, type, onCancel, onSubmit, backButton, cols, setFieldValue }) {
	const schema = {
		validation: Yup.object().shape({
			farm: Yup.string().required("A fazenda é obrigatória"),
			checklistType: Yup.string().required("O tipo de checklist é obrigatório"),
		}),

		initialValues: {
			farm: data ? data.farm._id : "",
			checklistType: data ? data.checklistType._id : "",
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
			<InputGroup id='farm' name='farm' type='select' title='Fazenda' placeholder='Seleciona uma fazenda' />
			<InputGroup id='checklistType' name='checklistType' type='select' title='Tipo de checklist' placeholder='Seleciona um tipo de checklist' />
		</Form>
	)
}
