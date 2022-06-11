import { useContext, useEffect, useState } from "react"
import { FaRegEdit } from "react-icons/fa"
import Table from "../../../../../MuuCow/Common/Table"
import ServiceBase from "../../../../../../services/ServiceBase"
import Button from "../../../../../MuuCow/Common/Button"
import TableContext from "../../../../../../contexts/TableContext"
import ModalContext from "../../../../../../contexts/ModalContext"
import ModalFabrica from "./_modal"

export default function FabricaTab() {
	const [data, setData] = useState([])
	const { setTotalPages, page, reloadData, setReloadData } = useContext(TableContext)
	const { setShowModal, setModalData } = useContext(ModalContext)
	const modelName = "factory"
	const service = ServiceBase(modelName)

	const getInitialData = async () => {
		const initialData = await service.getAll(page, 10)
		setData(initialData.docs)
		setTotalPages(initialData.totalPages)
	}

	const cols = [
		{ id: "name", name: "Nome", center: false },
		{ id: "location.city.name", name: "Cidade", center: true },
		{ id: "location.state.name", name: "Estado", center: true },
	]
	const tableAction = (formData) => {
		return (
			<Button
				color='#00AB77'
				onClick={() => {
					setShowModal(true)
					setModalData({
						title: "Visualizar/Editar",
						content: <ModalFabrica data={formData} modelName={modelName} />,
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
