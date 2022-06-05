import { createContext, useState } from "react"

const MenuContext = createContext()

export function MenuProvider({ children }) {
	const [activePage, setActivePage] = useState("inicio")

	return (
		<MenuContext.Provider
			value={{
				activePage,
				setActivePage,
			}}
		>
			{children}
		</MenuContext.Provider>
	)
}

export const MenuConsumer = MenuContext.Consumer
export default MenuContext
