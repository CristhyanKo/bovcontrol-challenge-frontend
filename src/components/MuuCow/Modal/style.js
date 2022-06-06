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
	z-index: 9998;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.4);
`

export const Box = styled.div`
	display: flex;

	flex-direction: column;
	margin: 10px;
	padding: 25px;
	width: ${(props) => props.width || "900px"};
	height: ${(props) => props.height || "auto"};
	background: #fff;
	border-radius: 20px;
	-webkit-box-shadow: 0px 3px 35px 11px rgba(0, 0, 0, 0.1);
	box-shadow: 0px 3px 35px 11px rgba(0, 0, 0, 0.1);
`
export const BoxHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 20px;

	svg {
		cursor: pointer;
	}
`
export const BoxContent = styled.div`
	min-height: 300px;
	height: 1px;
	padding: 20px 0;
	overflow: auto;

	@media (max-width: 700px) {
		max-height: 500px;
		overflow-y: auto;
	}
	@media (max-width: 500px) {
		max-height: 350px;
		overflow-y: auto;
	}
`
export const BoxFooter = styled.div`
	display: flex;
	justify-content: end;
	> * {
		margin-left: 15px;
	}
`
export const Title = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	h2,
	h4 {
		font-weight: normal;
	}
`
