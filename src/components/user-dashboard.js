import React from 'react';
import Navbar from './navbar/navbar.js'
//import { Route, Routes } from 'react-router-dom';
import UDHome from './user/home.js'
import UDOrders from './user/your-orders.js'
import UDPlace from './user/place-new-order.js'
import UDHistory from './user/order-history.js'
import UDTrack from './user/track-order.js'
import {useState} from 'react';

const UserDash = () => {
	const [vari, setVari] = useState(0);
	return(
		<>
		<Navbar vari={vari} setVari={setVari} />
		{vari === 0 && <UDHome />}
		{vari === 1 && <UDOrders />}
		{vari === 2 && <UDPlace />}
		{vari === 3 && <UDHistory />}
		{vari === 4 && <UDTrack />}
      		{/*<Routes>
    			<Route path='/' element={<UDHome />} />
    			<Route path='/your-orders' element={<UDOrders />} />
    			<Route path='/place-new-order' element={<UDPlace />} />
    			<Route path='/order-history' element={<UDHistory />} /> 
    			<Route path='/track-order' element={<UDTrack />} /> 
    		</Routes>*/}
		</>)
}

export default UserDash;