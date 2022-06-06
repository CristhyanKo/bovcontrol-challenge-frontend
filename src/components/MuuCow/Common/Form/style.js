import styled from "styled-components"

export const Cols = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	/* background: tomato;
	border: 1px solid black; */
	margin-top: 10px;

	> div {
		margin-right: 50px;
		:last-child {
			margin-right: 0;
		}
	}

	:first-child {
		margin-top: 0;
	}
`
