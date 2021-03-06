
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
	*{
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}
	
	html, body, #root{
		font-family: 'Roboto', sans-serif;
		font-size: 1rem;
	}
`
export { GlobalStyles }