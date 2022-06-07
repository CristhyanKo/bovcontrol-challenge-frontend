import { useContext } from "react"
import * as Yup from "yup"
import ServiceBase from "../../../../services/ServiceBase"
import TableContext from "../../../../contexts/TableContext"
import Form from "../../../MuuCow/Common/Form"
import InputGroup from "../../../MuuCow/Common/InputGroup"

export default function ChecklistForm({ data, submitRef, width }) {
	const { setReloadData } = useContext(TableContext)
	const service = ServiceBase("farmer")
	const schema = {
		validation: Yup.object().shape({
			name: Yup.string().required("O nome é obrigatório"),
			email: Yup.string().email("O email é inválido").required("O email é obrigatório"),
			isSupervisor: Yup.boolean(),
		}),

		initialValues: {
			nome: data ? data.name : "",
			email: data ? data.email : "",
			phone: data ? data.phone : "",
			isSupervisor: data ? data.isSupervisor : false,
		},
	}

	const submit = async (values) => {
		const updateDate = {
			farmerId: data._id,
			name: values.nome,
			email: values.email,
			phone: values.phone,
			isSupervisor: values.isSupervisor,
		}

		await service.update(updateDate).then(() => {
			setReloadData(true)
		})
	}

	return (
		<Form width={width} schema={schema} onSubmit={submit} cols={0} submitRef={submitRef}>
			<InputGroup id='nome' name='nome' type='text' title='Nome' placeholder='Informe o nome do Fazendeiro' />
			<InputGroup id='email' name='email' type='email' title='Email' placeholder='Informe o email do Fazendeiro' />
			<InputGroup id='phone' name='phone' type='text' title='Telefone' placeholder='Informe o telefone do Fazendeiro' mask='(99) 9 9999-9999' />
			<InputGroup id='isSupervisor' name='isSupervisor' title='É um supervisor ?' type='checkbox' placeholder='Sim' />
		</Form>
	)
}
