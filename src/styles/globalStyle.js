import { createGlobalStyle } from "styled-components"
import backgroundPage from "../../public/images/background.fw.png"

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
	}

	body {
		background-image: url('${backgroundPage.src}');		
		background:url('${backgroundPage.src}') no-repeat center center fixed; 
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		margin: 0;
		padding: 0 20px;
		font-family: 'Work Sans', sans-serif;

		* {
			scrollbar-width: auto;
			scrollbar-color: #A25E31 #ffffff;
		}

		*::-webkit-scrollbar {
			width: 16px;
		}

		*::-webkit-scrollbar-track {
			background: #ffffff;
		}

		*::-webkit-scrollbar-thumb {
			background-color: #A25E31;
			border-radius: 10px;
			border: 3px solid #ffffff;
		}
	}

  	hr {
      width: 100%;
      border: 0;
      height: 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      margin: ${(props) => (props.m ? `${props.m}px 0` : null)};
    }

	a {
		cursor: pointer;
	}
`

export default GlobalStyle
