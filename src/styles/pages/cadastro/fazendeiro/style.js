import styled from "styled-components"

export const Form = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	width: 100%;
	margin-top: 40px;
	flex-direction: column;
`

export const FormActions = styled.div`
	display: flex;
	margin-top: 30px;
	width: ${(props) => props.width || "100%"};
`

export const Page = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;

	h2 {
		margin-top: 20px;
	}
`
