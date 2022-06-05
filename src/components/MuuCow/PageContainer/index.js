import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"
import { Content, Page } from "./style"

export default function PageContainer({ children, title }) {
	return (
		<>
			<Head>
				<title>MuuCow {title && ` - ${title}`}</title>
			</Head>
			<Page>
				<Header />
				<Content>{children}</Content>
				<Footer />
			</Page>
		</>
	)
}
