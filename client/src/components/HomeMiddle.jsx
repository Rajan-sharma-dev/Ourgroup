import React from 'react';
import './HomeMiddle.css';

const HomeMiddle = () => {
  return <div className='home-middle'>
      <div className='middle-left'>
          <div className='big-logo'>
            <h1>Laundry</h1>
            <h1>Service</h1>
          </div>
          <p>Doorstep Wash & Dryclean Service</p>
          <div className='register-div'>
              <h4>Don't have an account?</h4>
              <button>Register</button>
          </div>
      </div>
      <div className='middle-right'>
          <h2>SIGN IN</h2>
          <input type="text" />
          <input type="password" />
          <a href="#">Forgot Password?</a>
          <button>Sign In</button>
      </div>
  </div>
};

export default HomeMiddle;
