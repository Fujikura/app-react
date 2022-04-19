
import React, { useState, useEffect } from 'react'
import { ListData } from '../../../Usercases/Received/GetListReceived'
import * as S from './styles'

const Filter = () => {
	const [value, setValue] = useState('')
	const [data, setData] = useState<[]>([])
	

	const handleFilterChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}
	
	useEffect(() => {
		const listDescriptionFiltered = ListData.filter(item => {
			return item.description === value
		})
		setData(listDescriptionFiltered)
	}, [value])
	
	return(
		<>
		<S.Container>
			<S.Input onChange={handleFilterChange}/>
		</S.Container>
		{
			data.map(item => (
				<span>{item.description}</span>
			))
		}
		</>
		)
}

export { Filter }