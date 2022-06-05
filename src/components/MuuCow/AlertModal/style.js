import styled from "styled-components"

export const Hr = styled.hr`
	width: 100%;
	border: 0;
	height: 0;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	border-bottom: 1px solid rgba(255, 255, 255, 0.3);
	margin: ${(props) => (props.m ? `${props.m}px 0` : null)};
	margin-top: ${(props) => (props.mt ? `${props.mt}px` : null)};
	margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : null)};
`

export const Area = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	z-index: 9999;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.4);
`

export const Box = styled.div`
	border-top: 20px solid ${(props) => props.colorTop || "#63A36F"};
	display: flex;
	flex-direction: column;
	margin: 10px;
	padding: 25px;
	width: ${(props) => props.width || "580px"};
	height: ${(props) => props.height || "auto"};
	background: #fff;
	border-radius: 20px;
	-webkit-box-shadow: 0px 3px 35px 11px rgba(0, 0, 0, 0.1);
	box-shadow: 0px 3px 35px 11px rgba(0, 0, 0, 0.1);
`

export const BoxTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 20px;
	svg {
		cursor: pointer;
	}
`

export const Title = styled.div`
	display: flex;
	align-items: center;
	width: 100%;

	p {
		font-size: 14pt;
		margin-left: 15px;
		color: rgba(0, 0, 0, 0.6);
	}
`
export const BoxContent = styled.div`
	display: flex;
	padding: 20px 0;
`
export const BoxFooter = styled.div`
	display: flex;
	justify-content: flex-end;
`
