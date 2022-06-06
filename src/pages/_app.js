import { MenuProvider } from "../contexts/MenuContext"
import GlobalStyle from "../styles/globalStyle"
import "animate.css"
import { ModalProvider } from "../contexts/ModalContext"
import { PageContainerProvider } from "../contexts/PageContainerContext"

export default function MyApp({ Component, pageProps }) {
	return (
		<PageContainerProvider>
			<ModalProvider>
				<MenuProvider>
					<GlobalStyle />
					<Component {...pageProps} />
				</MenuProvider>
			</ModalProvider>
		</PageContainerProvider>
	)
}
