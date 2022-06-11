/* eslint-disable jsx-a11y/control-has-associated-label */
import { useContext, useEffect } from "react"
import MapContext from "../../../../../../contexts/MapContext"
import ModalContext from "../../../../../../contexts/ModalContext"
import TableContext from "../../../../../../contexts/TableContext"
import ServiceBase from "../../../../../../services/ServiceBase"
import FazendaForm from "../../../_forms/FazendaForm"

export default function ModalFazenda({ data, modelName }) {
	const { latitude, longitude, setLatitude, setLongitude } = useContext(MapContext)
	const { setReloadData } = useContext(TableContext)
	const { setShowModal } = useContext(ModalContext)
	const service = ServiceBase(modelName)

	const submit = async (values) => {
		const updateDate = {
			farmId: data._id,
			name: values.name,
			location: {
				city: values.city,
				state: values.state,
				coordinates: {
					latitude,
					longitude,
				},
			},
			cowsHead: values.cowsHead,
			farmers: values.farmers,
			factories: values.factories,
			supervisors: values.supervisors,
		}

		await service.update(updateDate).then(() => {
			setShowModal(false)
			setReloadData(true)
		})
	}

	useEffect(() => {
		setLatitude(data ? data.location?.coordinates?.latitude : 0)
		setLongitude(data ? data.location?.coordinates?.longitude : 0)
	}, [data])

	return (
		<div style={{ height: "650px" }}>
			<FazendaForm
				data={data}
				type='update'
				onSubmit={submit}
				onCancel={() => {
					setShowModal(false)
				}}
			/>
		</div>
	)
}
