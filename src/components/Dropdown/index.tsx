
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'

interface IDropdownProps{
	item: {
		label: string,
		path?: string,
		icon?: React.ReactNode,
		subitems?: {
	  	label: string,
	  	path?: string
		}[],
	},
}

const Dropdown: React.FC<IDropdownProps> = ( props ) => {
	const [openSubitems, setOpenSubitems] = useState(false)
	const { item } = props;
	
	const handleDropdownItemClick = ():void => {
		setOpenSubitems(!openSubitems)
	}
	
	return(
		<S.Dropdown>
			<S.DropdownItem onClick={handleDropdownItemClick}>
				{ item.icon }
				<Link to='/dashboard'>
					{item.label}
				</Link>
			</S.DropdownItem>
			{openSubitems && item.subitems && item.subitems.map(item => (
				<S.DropdownSubItem>{item.label}</S.DropdownSubItem>
			))}
		</S.Dropdown>
		)
}
export { Dropdown }