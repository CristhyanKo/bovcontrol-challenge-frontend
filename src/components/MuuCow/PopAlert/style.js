import styled from "styled-components"
import pSBC from "shade-blend-color"

export const Box = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	top: 30px;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	max-width: 280px;
	border-radius: 8px;
	padding: 10px 20px;
	background-color: ${(props) => props.color};
	border: 1px solid ${(props) => pSBC(-0.1, props.color)};
	color: #fff;
	-webkit-box-shadow: 0px 3px 35px 11px rgba(0, 0, 0, 0.1);
	box-shadow: 0px 3px 35px 11px rgba(0, 0, 0, 0.1);
`
export const Icon = styled.div`
	display: flex;
	width: 40px;
`
export const Message = styled.div`
	display: flex;
	flex: 1;
`
