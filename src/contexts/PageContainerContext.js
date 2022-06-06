import { createContext, useState } from "react"

const PageContainerContext = createContext()

export function PageContainerProvider({ children }) {
	const [pageIsLoading, setPageIsLoading] = useState(false)

	return (
		<PageContainerContext.Provider
			value={{
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
