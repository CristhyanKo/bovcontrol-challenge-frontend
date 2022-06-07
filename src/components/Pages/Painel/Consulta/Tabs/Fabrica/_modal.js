/* eslint-disable jsx-a11y/control-has-associated-label */
import { useContext, useEffect } from "react"
import MapContext from "../../../../../../contexts/MapContext"
import ServiceBase from "../../../../../../services/ServiceBase"
import FabricaForm from "../../../_forms/FabricaForm"
import TableContext from "../../../../../../contexts/TableContext"
import ModalContext from "../../../../../../contexts/ModalContext"

export default function ModalFabrica({ data }) {
	const { latitude, longitude, setLatitude, setLongitude } = useContext(MapContext)
	const { setReloadData } = useContext(TableContext)
	const { setShowModal } = useContext(ModalContext)
	const service = ServiceBase("factory")

	const submit = async (values) => {
		const updateDate = {
			factoryId: data._id,
			name: values.name,
			location: {
				city: values.city,
				state: values.state,
				coordinates: {
					latitude,
					longitude,
				},
			},
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
		<FabricaForm
			data={data}
			type='update'
			onSubmit={submit}
			onCancel={() => {
				setShowModal(false)
			}}
		/>
	)
}
