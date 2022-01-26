import React from 'react';
import './HeaderLogin.css'

const HeaderLogin = (props) => {
    console.log(props)
  return <div className='headerlogin-container'>
    <div className='headerlogin-logo'>LAUNDRY</div>
        <div className='headerlogin-navs'>
            <ul>
            <li className='pricing'>Pricing</li>
            <li className='career'>Career</li>
            <div className='profile'>
                <img id='profile-pic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW0u5Eiiy3oM6wcpeEE6sXCzlh8G-tX1_Iw&usqp=CAU" alt="" />
                <li className='headerlogin-signin'>{props.name}</li>
            </div>
            </ul>
        </div>
</div>;
};

export default HeaderLogin;
