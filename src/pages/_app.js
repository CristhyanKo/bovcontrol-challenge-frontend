import { MenuProvider } from "../contexts/MenuContext"
import GlobalStyle from "../styles/globalStyle"

export default function MyApp({ Component, pageProps }) {
	return (
		<MenuProvider>
			<GlobalStyle />
			<Component {...pageProps} />
		</MenuProvider>
	)
}
