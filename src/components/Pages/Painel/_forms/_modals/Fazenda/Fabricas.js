import * as Yup from "yup"
import Form from "../../../../../MuuCow/Common/Form"
import InputGroup from "../../../../../MuuCow/Common/InputGroup"

export default function Fabricas({ data, width, type, onCancel, onSubmit, backButton, cols }) {
	const schema = {
		validation: Yup.object().shape({
			factory: Yup.object().required("Fábrica é obrigatório"),
		}),

		initialValues: {
			tableId: new Date().getTime(),
			factory: data ? data.factory._id : "",
			factoryDistance: data ? data.factoryDistance : 0,
		},
	}

	return (
		<Form width={width} schema={schema} onSubmit={onSubmit} cols={cols || 0} type={type} onCancel={onCancel} backButton={backButton}>
			<InputGroup id='factory' name='factory' type='select' title='Fábrica' placeholder='Seleciona uma fábrica' returnObjectFromSelect />
			<InputGroup id='factoryDistance' name='factoryDistance' type='number' title='Distancia (KM)' placeholder='Informe a distancia da fábrica' />
		</Form>
	)
}
