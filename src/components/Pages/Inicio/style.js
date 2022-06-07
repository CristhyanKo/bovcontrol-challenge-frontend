import styled from "styled-components"

export const Box = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	height: 100%;
`

export const ImageArea = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	height: 100%;
	img {
		max-height: 300px;
	}
`

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: center;
	align-items: flex-start;
	color: #5b5b5b;

	p {
		max-width: 500px;
		margin-top: 20px;
		color: #7e7e7e;
	}
`

export const Features = styled.div`
	display: flex;
	margin-top: 20px;
`
export const Feature = styled.div`
	display: flex;
	padding: 10px 20px;
	background: ${(props) => props.color || "tomato"};
	border-radius: 50px;
	color: #fff;
	margin-right: 10px;

	:last-child {
		margin-right: 0;
	}
`
