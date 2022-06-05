import { MenuProvider } from "../contexts/MenuContext"
import GlobalStyle from "../styles/globalStyle"
import "animate.css"

export default function MyApp({ Component, pageProps }) {
	return (
		<MenuProvider>
			<GlobalStyle />
			<Component {...pageProps} />
		</MenuProvider>
	)
}
