import styled from "styled-components"

export const Group = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	:first-child {
		label {
			margin-top: 0px;
		}
	}

	label {
		font-size: 11pt;
		margin-bottom: 2px;
		margin-top: 8px;
		margin-left: 2px;
		margin-top: ${(props) => (props.noMarginTop ? "0" : "8px")};
	}

	input {
		padding: 10px;
		border-radius: 5px;
		border: 1px solid #ccc;
		outline-color: #ccc;
	}
`
export const Error = styled.div`
	margin-top: 2px;
	font-size: 11pt;
	color: #f44a1a;
`
export const GroupCheckbox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: ${(props) => (props.noMarginTop ? "0" : "10px")};
	align-items: flex-start;
	width: 100%;

	label {
		font-size: 11pt;
		margin-top: 2px;
	}
`

export const GropuInputsCheckbox = styled.div`
	display: flex;
	margin-top: 5px;

	label {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`
