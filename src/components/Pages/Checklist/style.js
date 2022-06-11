import styled from "styled-components"

export const ChecklistContent = styled.div`
	display: flex;
	flex-wrap: wrap;
	height: 100%;
	max-height: 560px;
`

export const List = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	background: ${(props) => props.color};
	border-radius: 8px;
	padding: 20px;
	color: #fff;
	height: 100%;
	overflow: auto;

	::-webkit-scrollbar {
		width: 15px;
	}

	::-webkit-scrollbar-thumb {
		border: 4px solid rgba(0, 0, 0, 0);
		background-clip: padding-box;
		border-radius: 9999px;
		background-color: #fff;
	}
`
export const ChecklistViewer = styled.div`
	display: flex;
	flex: 2;
	background: #e7e7e7;
	margin-left: 40px;
	border-radius: 8px;
	padding: 20px;
	height: 100%;
	overflow: auto;

	::-webkit-scrollbar {
		width: 20px;
	}

	::-webkit-scrollbar-thumb {
		border: 4px solid rgba(0, 0, 0, 0);
		background-clip: padding-box;
		border-radius: 9999px;
		background-color: #3d31a2;
	}
`
export const ListItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex: 1;
	background: #fff;
	border-radius: 8px;
	padding: 20px;
	color: #000;
	margin-bottom: 20px;
	:last-child {
		margin-bottom: 0;
	}

	max-height: 60px;

	cursor: pointer;

	:hover {
		transform: scale(1.02);
	}
	${(props) =>
		props.active &&
		`
		background: #1e0550;
		color: #fff;
		transform: scale(1.02);
	`};
`

export const ListItemContent = styled.div`
	display: flex;
	flex-direction: column;

	h4 {
		color: ${(props) => props.color};
		${(props) => props.active && `color: #fff;`};
	}

	span {
		color: #444;
		font-size: 11pt;
		${(props) => props.active && `color: #9d9d9d;`};
	}

	small {
		margin-top: 10px;
		color: #444;
		${(props) => props.active && `color: #9d9d9d;`};
	}
`
export const ListItemArrow = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20pt;
`

export const Empty = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const ViewContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 900px;
`
export const ViewHeader = styled.div`
	display: flex;
	justify-content: space-between;
	background: #fff;
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
	border-radius: 8px;
	margin-bottom: 20px;
`
export const ViewMetrics = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
`

export const Infos = styled.div`
	margin-right: 40px;
	:last-child {
		margin-right: 0;
	}
`
export const Info = styled.div`
	display: flex;
	margin-bottom: 5px;

	:last-child {
		margin-bottom: 0;
	}

	b {
		margin-right: 5px;
		color: #444;
	}
`

export const Box = styled.div`
	display: flex;
	flex: ${(props) => props.flex || 1};
	background: #fff;
	padding: 20px;
	margin-right: 20px;
	border-radius: 8px;

	:last-child {
		margin-right: 0;
	}
`

export const Type = styled.div`
	display: flex;
	width: 100%;
	box-sizing: border-box;
	justify-content: space-between;
	align-items: center;
	background: #3d31a2;
	color: #fff;
	padding: 10px;
	border-radius: 8px;
	margin-bottom: 10px;
`

export const CowMetric = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

	h4 {
		color: ${(props) => props.color};
	}

	span {
		font-size: 40pt;
		color: #444;
	}
`

export const ProductionMetric = styled.div`
	display: flex;
	flex-direction: column;

	h4 {
		margin-bottom: 10px;
	}
`

export const ToolTipChart = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #3d31a2;
	color: #fff;
	padding: 10px;
	border-radius: 8px;
`

export const Supervisors = styled.div`
	display: flex;
	flex-direction: column;
	background: #fff;
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
	border-radius: 8px;
	margin-bottom: 20px;

	h4 {
		margin-bottom: 10px;
	}
`
