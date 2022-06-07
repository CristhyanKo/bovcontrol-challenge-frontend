import { useContext, useEffect } from "react"
import * as Yup from "yup"
import MapContext from "../../../../contexts/MapContext"
import Form from "../../../MuuCow/Common/Form"
import InputGroup from "../../../MuuCow/Common/InputGroup"

export default function FazendaForm({ data, width, type, onCancel, onSubmit, backButton, cols }) {
	const { setLatitude, setLongitude } = useContext(MapContext)
	const schema = {
		validation: Yup.object().shape({
			name: Yup.string().required("O nome é obrigatório"),
		}),

		initialValues: {
			name: data ? data.name : "",
			state: data ? data.location.state._id : "",
			city: data ? data.location.city._id : "",
		},
	}

	useEffect(() => {
		setLatitude(data ? data.location?.coordinates?.latitude : 0)
		setLongitude(data ? data.location?.coordinates?.longitude : 0)

		return () => {
			setLatitude(0)
			setLongitude(0)
		}
	}, [data])

	return (
		<Form width={width} schema={schema} onSubmit={onSubmit} cols={cols || 0} type={type} onCancel={onCancel} backButton={backButton}>
			<InputGroup id='name' name='name' type='text' title='Nome' placeholder='Informe o nome' />
			<InputGroup id='state' name='state' type='select' title='Estado' placeholder='Digite ao menos 3 caracteres' />
			<InputGroup id='city' name='city' type='select' title='Cidade' placeholder='Digite ao menos 3 caracteres' />
			<InputGroup id='map' name='map' title='Localização' type='map' />
			<InputGroup id='cowsHead' name='cowsHead' type='number' title='Vacas' placeholder='Informe a quantidade de vacas' />
			<InputGroup id='farmer' name='farmers' type='select' title='Fazendeiros' />
		</Form>
	)
}
