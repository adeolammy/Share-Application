import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Login from './Components/Login';
import Home from './Container/Home';

                                      

const App = () =>{
	return (
	
		<Routes>
			<Route path="login" element={<Login/>}/>
			<Route exact path="/*" element={<Home/>}/>
		</Routes>
	);
}

export default App;
