
import React from 'react'
import { AiFillDashboard } from 'react-icons/ai'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { FiSettings } from 'react-icons/fi'

const SidebarData = [
	{
		label: 'Dashboard',
		path: '/dashboard',
		icon: <AiFillDashboard />
	},
	{
		label: 'Transacões',
		path: '',
		icon: <RiMoneyDollarCircleLine />,
		subitems: [
			{
				label: 'Entradas',
				path: '/entradas'
			},
			{
				label: 'Saídas',
				path: '/saidas'
			}
		]
	},
	
	{
		label: 'Configurações',
		path: '',
		icon: <FiSettings />,
		subitems: [
			{ 
				label: 'Usuarios',
				path: '/'
			},
			{ 
				label: 'Definir cor padrão',
				path: '/'
			}
		]
	}
]
export { SidebarData } 