import { createContext, useState } from "react"

const MapContext = createContext()

export function MapProvider({ children }) {
	const [latitude, setLatitude] = useState(0)
	const [longitude, setLongitude] = useState(0)

	return (
		<MapContext.Provider
			value={{
				latitude,
				setLatitude,
				longitude,
				setLongitude,
			}}
		>
			{children}
		</MapContext.Provider>
	)
}

export const MapConsumer = MapContext.Consumer
export default MapContext
