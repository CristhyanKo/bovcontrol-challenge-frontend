import Lottie from "react-lottie"
import cowAbduction from "./cowAbduction.json"

export default function CowAbduction() {
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
