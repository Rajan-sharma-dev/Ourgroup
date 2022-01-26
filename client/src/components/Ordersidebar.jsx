import React from 'react';
import { NavLink } from 'react-router-dom';
//import home from '../assets'
//import more from '../assets'
//import list from '../assets'
import './OrderSideBar.css'
function OrderSidebar() {
  return <div className='side-bar'>
        <div className='img1'><NavLink to="/homeji/store">Store</NavLink></div>
        <div className='img2'><NavLink to="/homeji/order">Order</NavLink></div>
        <div className='img3'><NavLink to=""></NavLink>Nothing</div>
      </div>
 
}
export default OrderSidebar;