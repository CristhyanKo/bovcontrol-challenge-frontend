import { useContext, useEffect, useState } from "react"
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa"
import Table from "../../../../../MuuCow/Common/Table"
import ServiceBase from "../../../../../../services/ServiceBase"
import Button from "../../../../../MuuCow/Common/Button"
import TableContext from "../../../../../../contexts/TableContext"
import ModalContext from "../../../../../../contexts/ModalContext"
import ModalFazendeiro from "./_modal"

export default function FazendeiroTab() {
	const [data, setData] = useState([])
	const { setTotalPages, page } = useContext(TableContext)
	const { setShowModal, setModalData, setShowAlertModal, setAlertModalData } = useContext(ModalContext)
	const service = ServiceBase("farmer")

	const cols = [
		{ id: "name", name: "Nome", center: false },
		{ id: "email", name: "Email", center: false },
		{ id: "isSupervisor", name: "Supervisor", center: true },
	]
	const tableAction = (formData) => {
		return (
			<>
				<Button
					color='#00AB77'
					onClick={() => {
						setShowModal(true)
						setModalData({
							title: "Visualizar/Editar",
							content: <ModalFazendeiro data={formData} />,
							confirmText: "Salvar",
							onConfirm: () => {
								setShowModal(false)
							},
							onClose: () => {
								setShowModal(false)
							},
						})
					}}
					mr='5px'
				>
					<FaRegEdit />
				</Button>
				<Button
					color='#00AB77'
					onClick={() => {
						setShowAlertModal(true)
						setAlertModalData({
							title: "Atenção",
							content: "Deseja excluir o registro ?",
							type: "alert",
							onConfirm: () => {
								setShowAlertModal(false)
							},
							onClose: () => {
								setShowAlertModal(false)
							},
						})
					}}
				>
					<FaRegTrashAlt />
				</Button>
			</>
		)
	}

	const getInitialData = async () => {
		const initialData = await service.getAll(page, 10)
		setData(initialData.docs)
		setTotalPages(initialData.totalPages)
	}

	useEffect(() => {
		getInitialData()
	}, [page])

	return <Table data={data} cols={cols} actions={tableAction} />
}
