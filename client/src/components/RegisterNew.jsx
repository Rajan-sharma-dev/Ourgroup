import React from 'react';
import './RegisterNew.css'

const RegisterNew = () => {
  return <div className='register-container'>
      <h1>REGISTER</h1>
      <form action="">
        <div className='register-box'>
          <div className='left-register'>
              <input type="text" placeholder='Name'/>
              <input type="text" placeholder='Phone'/>
              <input type="text" placeholder='District'/>
              <input type="text" placeholder='Pincode'/>
          </div>
          <div className='right-register'>
              <input type="text" placeholder='Email'/>
              <input type="text" placeholder='State'/>
              <input type="text" placeholder='Address'/>
          </div>
          </div>
        <div className='term-condition'>
          <input type="checkbox" />
          <h4>I agree to Terms & Condition receiving marketing and promotional materials</h4>
        </div>
        <button>Register</button>
      </form>
  </div>;
};

export default RegisterNew;
