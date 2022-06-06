/* eslint-disable jsx-a11y/control-has-associated-label */
import { useContext, useEffect } from "react"
import * as Yup from "yup"
import MapContext from "../../../../../../contexts/MapContext"
import TableContext from "../../../../../../contexts/TableContext"
import ServiceBase from "../../../../../../services/ServiceBase"
import Form from "../../../../../MuuCow/Common/Form"
import InputGroup from "../../../../../MuuCow/Common/InputGroup"

export default function ModalFabrica({ data, submitRef, modelName }) {
	const { setReloadData } = useContext(TableContext)
	const { latitude, longitude, setLatitude, setLongitude } = useContext(MapContext)
	const service = ServiceBase(modelName)
	const schema = {
		validation: Yup.object().shape({
			name: Yup.string().required("O nome é obrigatório"),
		}),

		initialValues: {
			name: data.name,
		},
	}

	const submit = async (values) => {
		const updateDate = {
			factoryId: data._id,
			name: values.name,
			location: {
				coordinates: {
					latitude,
					longitude,
				},
			},
		}
		await service.update(updateDate).then(() => {
			setReloadData(true)
		})
	}

	useEffect(() => {
		setLatitude(data.location?.coordinates?.latitude || 0)
		setLongitude(data.location?.coordinates?.longitude || 0)
	}, [data])

	return (
		<Form schema={schema} onSubmit={submit} cols={0} submitRef={submitRef}>
			<InputGroup id='nome' name='nome' type='text' title='Nome' placeholder='Informe o nome' />
			<InputGroup id='location' name='location' title='Localização' type='map' />
		</Form>
	)
}
