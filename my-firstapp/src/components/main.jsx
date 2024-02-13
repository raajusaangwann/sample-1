import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

 function Main(){
    return(
        <div className="main container">
            <NavLink to='Home' className='btn btn-outline-primary  m-2'>Home</NavLink>
            <NavLink to='Contact' className='btn btn-outline-success m-2'>Contact</NavLink>
            <NavLink to='Prod' className='btn btn-outline-dark m-2'>Prod</NavLink>
            <NavLink to='Cart' className='btn btn-outline-danger m-2'>Cart</NavLink>
           <Outlet/>
        </div>
    )
}
export default Main;