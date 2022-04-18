import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Routers } from './Routes'
import './App.css';
import { GlobalStyles } from './styles/GlobalStyles'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

function App() {
	const [closeSidebar, setCloseSidebar] = useState(true)
  
  const handleCloseSidebar = ():void => {
  	setCloseSidebar(!closeSidebar)
  }
  return (
  	<BrowserRouter>
    <div className="App">
    	<GlobalStyles />
      <Header 
      	handleCloseSidebar={handleCloseSidebar}/>
      <Sidebar 
      	closeSidebar={closeSidebar}
      	handleCloseSidebar={handleCloseSidebar}
      	/>
      <main>
  			<Routers />
  		</main>
    </div>
    </BrowserRouter>
  );
}

export default App;
