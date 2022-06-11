import Lottie from "react-lottie"
import cowAbduction from "./cowMusic.json"

export default function CowMusic() {
	return (
		<Lottie
			options={{
				animationData: cowAbduction,
				loop: true,
				autoplay: true,
				rendererSettings: {
					preserveAspectRatio: "xMidYMid slice",
				},
			}}
			height={180}
			width={180}
		/>
	)
}
