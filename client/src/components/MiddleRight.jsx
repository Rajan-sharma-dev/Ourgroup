
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const MiddleRight = () => {
  const history = useHistory()
  
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const detailsSubmit=async(e)=>{
    try{
      e.preventDefault()
      
      const response= await fetch('/login',{
        method:'POST',
        headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
              email,password
              
          })

      }

      )
      // console.log(response.status)
      if(response.status===200){
        
        history.push("/order")
        // console.log("sucessfully login")
      }else{
        // alert("unable to login")
        alert(response.json())
    }

    }catch(err){
      alert(err)

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
