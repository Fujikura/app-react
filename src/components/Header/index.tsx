import React from 'react'
import * as S from './styles'

interface IHeaderProps{
	handleShowMenu: () => void;
}

const Header: React.FC<IHeaderProps> = (props) =>{
	const { handleShowMenu } = props;
	
	return(
		<S.Header>
		<div>
			<S.HeaderButtonToggle onClick={handleShowMenu}/>
		</div>
		</S.Header>
		)
}

export { Header }