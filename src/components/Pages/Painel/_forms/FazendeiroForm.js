import * as Yup from "yup"
import Form from "../../../MuuCow/Common/Form"
import InputGroup from "../../../MuuCow/Common/InputGroup"

export default function FazendeiroForm({ data, width, type, onCancel, onSubmit, backButton, cols }) {
	const schema = {
		validation: Yup.object().shape({
			name: Yup.string().required("O nome é obrigatório"),
			email: Yup.string().email("O email é inválido").required("O email é obrigatório"),
			isSupervisor: Yup.boolean(),
		}),

		initialValues: {
			name: data ? data.name : "",
			email: data ? data.email : "",
			phone: data ? data.phone : "",
			isSupervisor: data ? data.isSupervisor : false,
		},
	}

	return (
		<Form width={width} schema={schema} onSubmit={onSubmit} cols={cols || 0} type={type} onCancel={onCancel} backButton={backButton}>
			<InputGroup id='name' name='name' type='text' title='Nome' placeholder='Informe o nome do Fazendeiro' />
			<InputGroup id='email' name='email' type='email' title='Email' placeholder='Informe o email do Fazendeiro' />
			<InputGroup id='phone' name='phone' type='text' title='Telefone' placeholder='Informe o telefone do Fazendeiro' mask='(99) 9 9999-9999' />
			<InputGroup id='isSupervisor' name='isSupervisor' title='É um supervisor ?' type='checkbox' placeholder='Sim' />
		</Form>
	)
}
