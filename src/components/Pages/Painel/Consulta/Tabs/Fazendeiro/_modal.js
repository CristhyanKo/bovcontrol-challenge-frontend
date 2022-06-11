/* eslint-disable jsx-a11y/control-has-associated-label */
import { useContext } from "react"
import ModalContext from "../../../../../../contexts/ModalContext"
import TableContext from "../../../../../../contexts/TableContext"
import ServiceBase from "../../../../../../services/ServiceBase"
import FazendeiroForm from "../../../_forms/FazendeiroForm"

export default function ModalFazendeiro({ data, modelName }) {
	const { setReloadData } = useContext(TableContext)
	const { setShowModal } = useContext(ModalContext)
	const service = ServiceBase(modelName)

	const submit = async (values) => {
		const updateDate = {
			farmerId: data._id,
			name: values.name,
			email: values.email,
			phone: values.phone,
			isSupervisor: values.isSupervisor,
		}

		await service.update(updateDate).then(() => {
			setShowModal(false)
			setReloadData(true)
		})
	}

	return (
		<FazendeiroForm
			data={data}
			type='update'
			onSubmit={submit}
			onCancel={() => {
				setShowModal(false)
			}}
		/>
	)
}
