import { useContext, useEffect, useState, useRef } from "react"
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
	// const idName = `${modelName}Id`
	const submitRef = useRef(null)

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
			cols: [{ id: "farmer.name", name: "Nome", center: false }],
		},
		{
			id: "factories",
			name: "Fabricas",
			center: true,
			cols: [
				{ id: "factory.name", name: "Nome", center: false },
				// { id: "factory.location.city.name", name: "Cidade", center: false },
				// { id: "factory.location.state.name", name: "Estado", center: false },
			],
		},
		{ id: "supervisors", name: "Supervisores", center: true, cols: [{ id: "farmerSupervisor.name", name: "Nome", center: false }] },
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
							content: <ModalFazenda submitRef={submitRef} data={formData} modelName={modelName} />,
							confirmText: "Salvar",
							onConfirm: async () => {
								if (submitRef.current) {
									submitRef.current.handleSubmit()
									setShowModal(false)
								}
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
				{/* <Button
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
				</Button> */}
			</>
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
