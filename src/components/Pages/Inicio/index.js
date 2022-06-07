import Image from "next/image"
import { Box, Description, Feature, Features, ImageArea } from "./style"
import img from "../../../../public/images/gest.jpg"

export default function Inicio() {
	return (
		<Box>
			<ImageArea>
				<Image src={img} alt='MuuCow Bg' width='600' height='600' />
			</ImageArea>
			<Description>
				<h1>MuuCow</h1>
				<p>
					Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando
					um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só
					a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60,
					quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de
					editoração eletrônica como Aldus PageMaker.
				</p>
				<Features>
					<Feature color='#00AB77'>Painel</Feature>
					<Feature color='#F6B93F'>Metricas</Feature>
					<Feature color='#3D31A2'>Checklist</Feature>
				</Features>
			</Description>
		</Box>
	)
}
