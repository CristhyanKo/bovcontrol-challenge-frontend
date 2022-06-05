import styled from "styled-components"
import pSBC from "shade-blend-color"
import contrastTextColor from "../../../../helper/contrastTextColor"

export const ButtonBox = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px 10px;
	border: none;
	background: ${(props) => props.color || "#90a3ab"};
	cursor: pointer;
	border-radius: 8px;
	color: ${(props) => (props.color ? contrastTextColor(props.color) : "#fff")};
	min-height: 35px;
	max-height: 35px;
	margin-right: ${(props) => props.mr || "0"};

	:hover {
		background: ${(props) => pSBC(0.2, props.color) || pSBC("#90a3ab")};
		color: ${(props) => (props.color ? pSBC(contrastTextColor(props.color)) : pSBC("#fff"))};
	}

	svg {
		font-size: 12pt;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`
