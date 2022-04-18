import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
export const Header = styled.header`
width: 100%;
height: 70px;
display: flex;
justify-content: space-beteewen;
align-items: center;
background-color: red;
`

export const HeaderButtonToggle = styled(FaBars)`
	color: #FFF;
	font-size: 2rem;
	padding-left: 5px;
	cursor: pointer;
`