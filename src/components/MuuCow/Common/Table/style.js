import styled from "styled-components"
import pSBC from "shade-blend-color"

export const TableComponent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	border: 1px solid #dddddd;
	border-radius: 8px;
	background: #f9f9f9;
	position: relative;
`
export const TableHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background: #ededed;
	padding: 10px 10px;
	box-sizing: border-box;
	border-radius: 6px 6px 0 0;
	cursor: pointer;
`
export const TableContent = styled.div`
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	overflow: auto;
	z-index: 500;
	height: calc(100% - 90px);
`
export const TableColumn = styled.div`
	display: flex;
	justify-content: ${(props) => (props.center ? "center" : "flex-start")};
	align-items: flex-start;
	width: 100%;
`
export const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: ${(props) => (props.center ? "center" : "flex-start")};
	width: 100%;
	overflow: hidden;
`

export const TableRow = styled.div`
	cursor: pointer;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 5px 10px;
	border-bottom: 1px solid #dddddd;
	:nth-child(odd) {
		background-color: #ffffff;
	}
	:nth-child(even) {
		background-color: ${pSBC(-0.02, "#f9f9f9")};
	}

	:hover {
		background: ${pSBC(-0.08, "#f9f9f9")};
	}

	:last-child {
		border-bottom: none;
	}
`

export const TableFooter = styled.div`
	position: absolute;
	padding: 10px 0;
	margin-bottom: 10px;
	bottom: 0;
	right: 0;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 10px;
	margin-right: 20px;

	.active {
		background: #00bcd4;
		color: #fff;
		padding: 5px;
		border-radius: 50px;
	}

	span {
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20px;
		height: 20px;
		font-size: 12px;
		margin: 0 5px;
		padding: 5px;

		:hover {
			color: #fff;
			padding: 5px;
			border-radius: 50px;
			background: ${pSBC(-0.08, "#00bcd4")};
		}
	}
`

export const Empty = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	color: #797979;
	span {
		margin-top: 30px;
	}
`
