import { createContext, useState } from "react"

const TableContext = createContext()

export function TableProvider({ children }) {
	const [page, setPage] = useState(1)
	const [limit, setLimit] = useState(10)
	const [totalPages, setTotalPages] = useState(1)

	return (
		<TableContext.Provider
			value={{
				page,
				setPage,
				limit,
				setLimit,
				totalPages,
				setTotalPages,
			}}
		>
			{children}
		</TableContext.Provider>
	)
}

export const TableConsumer = TableContext.Consumer
export default TableContext
