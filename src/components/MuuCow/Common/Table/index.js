import { useContext, useEffect, useState } from "react"
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr"
import moment from "moment"
import { Empty, Row, TableColumn, TableComponent, TableContent, TableFooter, TableHeader, TableRow } from "./style"
import checkTypes from "../../../../helper/checkTypes"
import TableContext from "../../../../contexts/TableContext"
import Button from "../Button"
import ModalContext from "../../../../contexts/ModalContext"
import CowAbduction from "../../Animations/cowAbduction"

export default function Table({ data, cols, actions, height, noPagination, width }) {
	const [columns, setColumns] = useState([])
	const [rows, setRows] = useState([])
	const { setPage, setLimit, page, totalPages } = useContext(TableContext)
	const { setShowModal, setModalData } = useContext(ModalContext)

	useEffect(() => {
		setPage(1)
		setLimit(10)
	}, [])

	useEffect(() => {
		if (actions) {
			setColumns([...cols, { id: "action", name: "", center: true }])
			setRows(data.map((row) => ({ ...row, action: actions(row) })))
		} else {
			setColumns(cols)
			setRows(data)
		}
	}, [data])

	const handleOpenModalDetails = (dataDetails, detailCols, title) => {
		setShowModal(true)
		setModalData({
			title,
			content: <Table data={dataDetails} cols={detailCols} noPagination width='auto' />,
			confirmText: "Fechar",
			onConfirm: async () => {
				setShowModal(false)
			},
		})
	}

	const mountRowData = (row, col) => {
		switch (true) {
			case checkTypes.isBooelan(row[col.id]):
				return row[col.id] ? "Sim" : "Não"
			case col.id.split(".").length > 1: {
				const itens = col.id.split(".")
				const item = itens.reduce((acc, cur) => acc[cur], row)
				return col.type === "date" ? (moment(item).isValid() ? moment(item).format("DD/MM/YYYY") : "") : item
			}
			case checkTypes.isArray(row[col.id]):
				return <Button onClick={() => handleOpenModalDetails(row[col.id], col.cols, col.name)}>Visualizar</Button>
			default:
				return col.type === "date" ? (moment(row[col.id]).isValid() ? moment(row[col.id]).format("DD/MM/YYYY") : "") : row[col.id]
		}
	}

	return (
		<TableComponent height={height} width={width}>
			<TableHeader>
				{columns.map((col) => (
					<TableColumn center={col.center} key={col.id}>
						{col.name}
					</TableColumn>
				))}
			</TableHeader>
			<TableContent>
				{rows.length > 0 ? (
					rows.map((row, key) => (
						<TableRow key={key}>
							{columns.map((col) => (
								<Row center={col.center} key={col.id}>
									{mountRowData(row, col)}
								</Row>
							))}
						</TableRow>
					))
				) : (
					<Empty>
						<CowAbduction /> <span>Nenhuma informação encontrada.</span>
					</Empty>
				)}
			</TableContent>
			{!noPagination && (
				<TableFooter>
					{page > 1 && (
						<Button onClick={() => setPage(page - 1)}>
							<GrFormPreviousLink />
						</Button>
					)}
					{page > 1 && <span onClick={() => setPage(page - 1)}>{page - 1}</span>}
					<span className='active'>{page}</span>
					{page !== totalPages && <span onClick={() => setPage(page + 1)}>{page + 1}</span>}
					{page !== totalPages && (
						<Button onClick={() => setPage(page + 1)}>
							<GrFormNextLink />
						</Button>
					)}
				</TableFooter>
			)}
		</TableComponent>
	)
}
