import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import L from "leaflet"
import { useMemo, useState, useRef, useContext, useEffect } from "react"
import MapContext from "../../../../contexts/MapContext"

const customIcon = new L.Icon({
	iconUrl: "https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg",
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
})

export default function Map({ lat, lng }) {
	const { setLatitude, setLongitude } = useContext(MapContext)

	const markerRef = useRef(null)
	const [position, setPosition] = useState({ lat, lng })
	const eventHandlers = useMemo(
		() => ({
			dragend() {
				const marker = markerRef.current
				if (marker != null) {
					setLatitude(marker.getLatLng().lat)
					setLongitude(marker.getLatLng().lng)
					setPosition(marker.getLatLng())
				}
			},
		}),
		[]
	)

	useEffect(() => {
		if (lat === 0 && lng === 0) {
			navigator.geolocation.getCurrentPosition((p) => {
				const { latitude, longitude } = p.coords
				setPosition({ lat: latitude, lng: longitude })
			})
		}
	}, [])

	return (
		<MapContainer center={position} zoom={15} scrollWheelZoom style={{ height: "300px", borderRadius: "8px" }}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker ref={markerRef} icon={customIcon} position={position} draggable eventHandlers={eventHandlers}>
				<Popup>Clique e arraste o marcador para mudar o local.</Popup>
			</Marker>
		</MapContainer>
	)
}
