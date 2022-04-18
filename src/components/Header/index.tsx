import React, { Dispatch, SetStateAction } from 'react'
import * as S from './styles'

interface IHeaderProps{
	handleCloseSidebar: () => void;
}

const Header: React.FC<IHeaderProps> = (props) =>{
	const { handleCloseSidebar } = props;
	
	return(
		<S.Header>
		<div>
			<S.HeaderButtonToggle onClick={handleCloseSidebar}/>
		</div>
		</S.Header>
		)
}

export { Header }