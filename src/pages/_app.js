import { MenuProvider } from "../contexts/MenuContext"
import GlobalStyle from "../styles/globalStyle"
import "animate.css"
import { ModalProvider } from "../contexts/ModalContext"

export default function MyApp({ Component, pageProps }) {
	return (
		<ModalProvider>
			<MenuProvider>
				<GlobalStyle />
				<Component {...pageProps} />
			</MenuProvider>
		</ModalProvider>
	)
}
