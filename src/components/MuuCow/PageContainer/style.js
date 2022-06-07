import styled from "styled-components"
import pSBC from "shade-blend-color"

export const Page = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	margin: 0 auto;
	max-width: 1400px;
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	padding: ${(props) => (props.backButton ? "0px 30px 30px 30px" : "30px")};
	background: #fff;
	border-radius: 8px;
	border: 1.5px solid ${(props) => props.borderColor || "rgba(0, 0, 0, 0.16)"};
	height: 65vh;
	max-height: 65vh;
	border-bottom: 15px solid ${(props) => props.borderColor || "rgba(0, 0, 0, 0.16)"};
`

export const Child = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	margin-top: ${(props) => (props.backButton ? "-20px" : "0")};
	overflow-y: auto;
`

export const BackButtom = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	top: -15px;
	left: -45px;
	background: ${(props) => props.color};
	border-radius: 50px;
	padding: 5px;
	width: 30px;
	height: 30px;
	color: #fff;
	cursor: pointer;
	:hover {
		background: ${(props) => pSBC(-0.2, props.color)};
	}

	svg {
		font-size: 25pt;
	}
`
