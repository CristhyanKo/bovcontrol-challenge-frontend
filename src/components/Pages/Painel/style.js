import styled from "styled-components"
import pSBC from "shade-blend-color"

export const PainelContent = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	height: 100%;
`

export const Action = styled.div`
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 40px 60px;
	background: ${(props) => props.color};
	color: #fff;
	margin: 0 20px;
	font-size: 32pt;
	cursor: pointer;
	user-select: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;

	:hover {
		background: ${(props) => pSBC(-0.2, props.color)};
	}

	svg {
		font-size: 50pt;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 20px;
	}
`
