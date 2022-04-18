
import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { Dashboard } from '../Pages/Dashboard' 

const Routers = () => {
	return(
		<Routes>
			<Route path='/dashboard' element={<Dashboard />}/>
		</Routes>
		)
}

export { Routers }