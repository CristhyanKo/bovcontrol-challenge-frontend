import { useContext, useEffect, useState, useRef } from "react"
import { FaRegEdit } from "react-icons/fa"
import Table from "../../../../../MuuCow/Common/Table"
import ServiceBase from "../../../../../../services/ServiceBase"
import Button from "../../../../../MuuCow/Common/Button"
import TableContext from "../../../../../../contexts/TableContext"
import ModalContext from "../../../../../../contexts/ModalContext"
import ModalFazendeiro from "./_modal"

export default function FazendeiroTab() {
	const [data, setData] = useState([])
	const { setTotalPages, page, reloadData, setReloadData } = useContext(TableContext)
	const { setShowModal, setModalData } = useContext(ModalContext)
	const modelName = "farmer"
	const service = ServiceBase(modelName)

	const getInitialData = async () => {
		const initialData = await service.getAll(page, 10)
		setData(initialData.docs)
		setTotalPages(initialData.totalPages)
	}

	const cols = [
		{ id: "name", name: "Nome", center: false },
		{ id: "email", name: "Email", center: false },
		{ id: "phone", name: "Telefone", center: true },
		{ id: "isSupervisor", name: "Supervisor", center: true },
	]
	const tableAction = (formData) => {
		return (
			<Button
				color='#00AB77'
				onClick={() => {
					setShowModal(true)
					setModalData({
						title: "Visualizar/Editar",
						content: <ModalFazendeiro data={formData} modelName={modelName} />,
					})
				}}
				mr='5px'
			>
				<FaRegEdit />
			</Button>
		)
	}

	useEffect(() => {
		getInitialData()
	}, [page])

	useEffect(() => {
		if (reloadData) {
			getInitialData()
			setReloadData(false)
		}
	}, [reloadData])

	return <Table data={data} cols={cols} actions={tableAction} />
}
