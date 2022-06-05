import styled from "styled-components"
import pSBC from "shade-blend-color"

export const Tabs = styled.div`
	display: flex;
	padding: 0 10px;
	border-bottom: 2px solid ${(props) => props.color};
	overflow: auto;
`
export const TabOption = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 20px;
	border-radius: 8px 8px 0 0;
	${(props) => {
		if (!props.active) {
			return `
			border: 1px solid #dddddd;
			border-bottom: none;
			`
		}
		return `
			border: 1px solid ${props.color};
			border-bottom: none;
			`
	}}

	color: ${(props) => (props.active ? "#fff" : "#000")};
	background: ${(props) => (props.active ? props.color : "#e9e9e9")};
	cursor: pointer;
	user-select: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	transition: 0.2s;

	:hover {
		color: #fff;
		background: ${(props) => pSBC(-0.2, props.color)};
		border: 1px solid ${(props) => pSBC(-0.2, props.color)};
		border-bottom: none;
	}
`
export const ConsultaContent = styled.div`
	display: flex;
	margin-top: 10px;
	height: calc(100% - 70px);
`
