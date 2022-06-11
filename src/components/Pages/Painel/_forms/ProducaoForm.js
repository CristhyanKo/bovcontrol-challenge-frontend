import * as Yup from "yup"
import Form from "../../../MuuCow/Common/Form"
import InputGroup from "../../../MuuCow/Common/InputGroup"

export default function ProducaoForm({ data, width, type, onCancel, onSubmit, backButton, cols, setFieldValue }) {
	const schema = {
		validation: Yup.object().shape({
			farm: Yup.string().required("A fazenda é obrigatória"),
			date: Yup.string().required("A data é obrigatória"),
		}),

		initialValues: {
			farm: data ? data.farm._id : "",
			date: data ? data.date : "",
			milkProduced: data ? data.milkProduced : 0,
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
			<InputGroup id='date' name='date' type='datepicker' title='Data' />
			<InputGroup
				id='milkProduced'
				name='milkProduced'
				type='number'
				title='Total de leite produzido (L)'
				placeholder='Informe o total de leite produzido em litros'
			/>
		</Form>
	)
}
