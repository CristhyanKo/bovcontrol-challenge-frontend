import { useContext, useEffect, useState } from "react"
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr"
import { Row, TableColumn, TableComponent, TableContent, TableFooter, TableHeader, TableRow } from "./style"
import checkTypes from "../../../../helper/checkTypes"
import TableContext from "../../../../contexts/TableContext"
import Button from "../Button"

export default function Table({ data, cols, actions }) {
	const [columns, setColumns] = useState([])
	const [rows, setRows] = useState([])
	const { setPage, setLimit, page, totalPages } = useContext(TableContext)

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

	const mountRowData = (row, col) => {
		switch (true) {
			case checkTypes.isBooelan(row[col.id]):
				return row[col.id] ? "Sim" : "Não"
			case col.id.split(".").length > 1: {
				const itens = col.id.split(".")
				const item = itens.reduce((acc, cur) => acc[cur], row)
				return item
			}
			default:
				return row[col.id]
		}
	}

	return (
		<TableComponent>
			<TableHeader>
				{columns.map((col) => (
					<TableColumn center={col.center} key={col.id}>
						{col.name}
					</TableColumn>
				))}
			</TableHeader>
			<TableContent>
				{rows.map((row, key) => (
					<TableRow key={key}>
						{columns.map((col) => (
							<Row center={col.center} key={col.id}>
								{mountRowData(row, col)}
							</Row>
						))}
					</TableRow>
				))}
			</TableContent>
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
		</TableComponent>
	)
}
