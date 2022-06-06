import styled from "styled-components"

export const CheckboxArea = styled.div`
	display: flex;
	align-items: center;

	input {
		display: none;
	}
`

export const CustomCheckBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	min-width: 20px;
	min-height: 20px;
	border-radius: 8px;
	border: 2px solid #2c903e;
	margin-right: 8px;
	background-color: ${(props) => (props.checked ? "#2c903e" : "transparent")};

	svg {
		color: #fff;
		margin-top: 2px;
	}
`
