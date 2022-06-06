import Lottie from "react-lottie"
import cowMilkLoading from "./cowMilkLoading.json"

export default function CowMilkLoading() {
	return (
		<Lottie
			options={{
				animationData: cowMilkLoading,
				loop: true,
				autoplay: true,
				rendererSettings: {
					preserveAspectRatio: "xMidYMid slice",
				},
			}}
			height={180}
			width={180}
			style={{
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
			}}
		/>
	)
}
