import styled from "styled-components"

export const Box = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const MenuItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px 5px;
	margin-right: 30px;
	cursor: pointer;
	user-select: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	border-bottom: ${(props) => (props.active ? `3px solid ${props.color}` : "3px solid transparent")};
	:hover {
		border-bottom: 3px solid ${(props) => props.color || "#90a3ab"};
		transition: 0.2s ease-in-out;
	}

	:last-child {
		margin-right: 0;
	}
`
