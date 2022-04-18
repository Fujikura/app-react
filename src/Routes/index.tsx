
import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { Dashboard } from '../Pages/Dashboard' 
import { Entradas } from '../Pages/Entradas' 
import { Saidas } from '../Pages/Saidas' 

const Routers = () => {
	return(
		<Routes>
			<Route path='/dashboard' element={<Dashboard />}/>
			<Route path='/entradas' element={<Entradas />}/>
			<Route path='/saidas' element={<Saidas />}/>
		</Routes>
		)
}

export { Routers }