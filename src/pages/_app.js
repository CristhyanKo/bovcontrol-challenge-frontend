import ptBr from "date-fns/locale/pt-BR"
import { registerLocale, setDefaultLocale } from "react-datepicker"
import GlobalStyle from "../styles/globalStyle"
import { MenuProvider } from "../contexts/MenuContext"
import { ModalProvider } from "../contexts/ModalContext"
import { PageContainerProvider } from "../contexts/PageContainerContext"
import { MapProvider } from "../contexts/MapContext"
import "animate.css"
import "leaflet/dist/leaflet.css"
import "react-datepicker/dist/react-datepicker.css"

export default function MyApp({ Component, pageProps }) {
	registerLocale("pt-BR", ptBr)
	setDefaultLocale("pt-BR")
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
