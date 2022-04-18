
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}
	
	html, body, #root{
		font-family: sans-serif;
		font-size: 1rem;
	}
`
export { GlobalStyles }