import { createContext, useState } from "react"

const PageContainerContext = createContext()

export function PageContainerProvider({ children }) {
	const [pageIsLoading, setPageIsLoading] = useState(false)
	const [popAlert, setPopAlert] = useState(false)
	const [popAlertData, setPopAlertData] = useState({})

	const renderPopAlert = (message, type, timeout) => {
		setPopAlertData({ message, type })
		setPopAlert(true)

		setTimeout(() => {
			setPopAlert(false)
		}, timeout)
	}

	return (
		<PageContainerContext.Provider
			value={{
				popAlert,
				popAlertData,
				renderPopAlert,
				pageIsLoading,
				setPageIsLoading,
			}}
		>
			{children}
		</PageContainerContext.Provider>
	)
}

export const PageContainerConsumer = PageContainerContext.Consumer
export default PageContainerContext
