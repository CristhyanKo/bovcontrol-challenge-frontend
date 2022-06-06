import { useContext, useEffect, useState, useRef } from "react"
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa"
import Table from "../../../../../MuuCow/Common/Table"
import ServiceBase from "../../../../../../services/ServiceBase"
import Button from "../../../../../MuuCow/Common/Button"
import TableContext from "../../../../../../contexts/TableContext"
import ModalContext from "../../../../../../contexts/ModalContext"
import ModalFazendeiro from "./_modal"

export default function FazendeiroTab() {
	const [data, setData] = useState([])
	const { setTotalPages, page, reloadData, setReloadData } = useContext(TableContext)
	const { setShowModal, setModalData, setShowAlertModal, setAlertModalData } = useContext(ModalContext)
	const modelName = "farmer"
	const service = ServiceBase(modelName)
	const idName = `${modelName}Id`
	const submitRef = useRef(null)

	const getInitialData = async () => {
		const initialData = await service.getAll(page, 10)
		setData(initialData.docs)
		setTotalPages(initialData.totalPages)
	}

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
							content: <ModalFazendeiro submitRef={submitRef} data={formData} />,
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
