import React, { Dispatch, SetStateAction } from 'react'
import { SidebarData } from './SidebarData'
import * as S from './styles'

import { Dropdown } from '../../components/Dropdown'

type ISidebarProps = {
	closeSidebar: boolean;
	handleCloseSidebar: () => void;
}

const Sidebar: React.FC<ISidebarProps> = (props) => {
	const { closeSidebar, handleCloseSidebar } = props;
	return (
		<S.Sidebar closeSidebar={closeSidebar}>
			<S.Header>
				<S.ButtonClose onClick={handleCloseSidebar}/>
			</S.Header>
			<S.Menu>
				{ SidebarData.map(item => (
					<Dropdown item={item} />
				))}
			</S.Menu>
		</S.Sidebar>
		)
}

export { Sidebar }