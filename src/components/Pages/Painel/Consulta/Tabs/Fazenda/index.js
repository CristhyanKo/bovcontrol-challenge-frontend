import { useContext, useEffect, useState } from "react"
import { FaRegEdit } from "react-icons/fa"
import Table from "../../../../../MuuCow/Common/Table"
import ServiceBase from "../../../../../../services/ServiceBase"
import Button from "../../../../../MuuCow/Common/Button"
import TableContext from "../../../../../../contexts/TableContext"
import ModalContext from "../../../../../../contexts/ModalContext"
import ModalFazenda from "./_modal"

export default function FazendaTab() {
	const [data, setData] = useState([])
	const { setTotalPages, page, reloadData, setReloadData } = useContext(TableContext)
	const { setShowModal, setModalData } = useContext(ModalContext)
	const modelName = "farm"
	const service = ServiceBase(modelName)

	const getInitialData = async () => {
		const initialData = await service.getAll(page, 10)
		setData(initialData.docs)
		setTotalPages(initialData.totalPages)
	}

	const cols = [
		{ id: "name", name: "Nome", center: false },
		{ id: "location.city.name", name: "Cidade", center: false },
		{ id: "location.state.name", name: "Estado", center: false },
		{ id: "cowsHead", name: "Vacas", center: true },
		{
			id: "farmers",
			name: "Fazendeiros",
			center: true,
			cols: [
				{ id: "farmer.name", name: "Nome", center: false },
				{ id: "current", name: "Atual", center: true },
			],
		},
		{
			id: "factories",
			name: "Fabricas",
			center: true,
			cols: [
				{ id: "factory.name", name: "Nome", center: false },
				{ id: "factoryDistance", name: "Distancia (KM)", center: true },
				{ id: "factory.location.city.name", name: "Cidade", center: true },
				{ id: "factory.location.state.name", name: "Estado", center: true },
			],
		},
		{
			id: "supervisors",
			name: "Supervisores",
			center: true,
			cols: [
				{ id: "farmer.name", name: "Nome", center: false },
				{ id: "current", name: "Atual", center: true },
			],
		},
	]
	const tableAction = (formData) => {
		return (
			<Button
				color='#00AB77'
				onClick={() => {
					setShowModal(true)
					setModalData({
						title: "Visualizar/Editar",
						content: <ModalFazenda data={formData} modelName={modelName} />,
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
