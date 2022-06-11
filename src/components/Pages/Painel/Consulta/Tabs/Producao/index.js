import { useContext, useEffect, useState } from "react"
import { FaRegTrashAlt } from "react-icons/fa"
import Table from "../../../../../MuuCow/Common/Table"
import ServiceBase from "../../../../../../services/ServiceBase"
import Button from "../../../../../MuuCow/Common/Button"
import TableContext from "../../../../../../contexts/TableContext"
import ModalContext from "../../../../../../contexts/ModalContext"

export default function ProducaoTab() {
	const [data, setData] = useState([])
	const { setTotalPages, page, reloadData, setReloadData } = useContext(TableContext)
	const { setShowAlertModal, setAlertModalData } = useContext(ModalContext)
	const modelName = "production"
	const service = ServiceBase(modelName)
	const idName = `${modelName}Id`

	const getInitialData = async () => {
		const initialData = await service.getAll(page, 10)
		setData(initialData.docs)
		setTotalPages(initialData.totalPages)
	}

	const cols = [
		{ id: "farm.name", name: "Fazenda", center: false },
		{ id: "date", name: "Data", center: true, type: "date" },
		{ id: "milkProduced", name: "Total de Leite Produzido (L)", center: true },
	]
	const tableAction = (formData) => {
		return (
			<Button
				color='#00AB77'
				onClick={() => {
					setShowAlertModal(true)
					setAlertModalData({
						title: "Atenção",
						content: "Deseja excluir o registro ?",
						type: "alert",
						onConfirm: async () => {
							await service.delete({ [idName]: formData._id })
							setReloadData(true)
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
