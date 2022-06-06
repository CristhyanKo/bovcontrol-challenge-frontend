import { MenuProvider } from "../contexts/MenuContext"
import GlobalStyle from "../styles/globalStyle"
import "animate.css"
import "leaflet/dist/leaflet.css"
import { ModalProvider } from "../contexts/ModalContext"
import { PageContainerProvider } from "../contexts/PageContainerContext"
import { MapProvider } from "../contexts/MapContext"

export default function MyApp({ Component, pageProps }) {
	return (
		<PageContainerProvider>
			<ModalProvider>
				<MapProvider>
					<MenuProvider>
						<GlobalStyle />
						<Component {...pageProps} />
					</MenuProvider>
				</MapProvider>
			</ModalProvider>
		</PageContainerProvider>
	)
}
