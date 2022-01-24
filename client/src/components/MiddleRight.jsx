import React, { useState } from 'react';


const MiddleRight = () => {
  
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const detailsSubmit=async()=>{
    try{
      const response= await fetch('/login',{
        method:'POST',
          
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
              "email": email,
              "password":password
              
          })

      }

      )

    }catch(err){

    }
    


  }

  return <div className='sign-in'>
    <h2>SIGN IN</h2>
    <div className='input-field'>
    <form method='POST'>
    <input type="text" placeholder='Mobile / Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
   
      
    
    <a href="https://" id='forgot'>Forgot Password?</a>
    <button onClick={detailsSubmit}>Sign In</button>
    </form>
    </div>
  </div>;
};

export default MiddleRight;
