import { useContext, useEffect, useState } from "react"
import { FaRegEye, FaRegEdit, FaRegTrashAlt } from "react-icons/fa"
import Table from "../../../../../MuuCow/Common/Table"
import ServiceBase from "../../../../../../services/ServiceBase"
import Button from "../../../../../MuuCow/Common/Button"
import TableContext from "../../../../../../contexts/TableContext"

export default function FazendeiroTab() {
	const [data, setData] = useState([])
	const { setTotalPages, page } = useContext(TableContext)
	const service = ServiceBase("farmer")

	const cols = [
		{ id: "name", name: "Nome", center: false },
		{ id: "email", name: "Email", center: false },
		{ id: "isSupervisor", name: "Supervisor", center: true },
	]
	const tableAction = (i) => {
		return (
			<>
				<Button
					color='#00AB77'
					onClick={() => {
						console.log(i)
					}}
					mr='5px'
				>
					<FaRegEye />
				</Button>
				<Button
					color='#00AB77'
					onClick={() => {
						console.log(i)
					}}
					mr='5px'
				>
					<FaRegEdit />
				</Button>
				<Button
					color='#00AB77'
					onClick={() => {
						console.log(i)
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
