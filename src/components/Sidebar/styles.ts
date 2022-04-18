
import styled from 'styled-components'
import media from 'styled-media-query'
import { AiOutlineClose } from 'react-icons/ai'

interface ISidebarProps{
	closeSidebar: boolean;
}

export const Sidebar = styled.section<ISidebarProps>`
	width: 250px;
	${media.lessThan('medium')`
		width: 100%;
	`}
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
	background-color: red;
	transition: margin .4s linear;
	margin-left: ${ props => props.closeSidebar ? '-100%' : '0'}
`

export const Header = styled.header`
	width: 100%;
`

export const ButtonClose = styled(AiOutlineClose)`
	display: block;
	width: 100%;
	font-size: 3rem;
	color: #FFF;
	cursor: pointer;
`
export const Menu = styled.nav`
	margin-top: 30px;
`