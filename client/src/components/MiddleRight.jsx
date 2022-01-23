import React from 'react';

const MiddleRight = () => {
  return <div className='sign-in'>
    <h2>SIGN IN</h2>
    <div className='input-field'>
      <input type="text" placeholder='Mobile / Email'/>
      <input type="password" placeholder='Password'/>
    </div>
    <a href="https://" id='forgot'>Forgot Password?</a>
    <button>Sign In</button>
  </div>;
};

export default MiddleRight;
