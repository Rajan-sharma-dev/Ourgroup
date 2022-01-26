
import res from 'express/lib/response';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import "./order.css";
const Order=()=>{
    const history=useNavigate()
    const [data,setData]=useState([{address:"rajan"}])
    const callHome = async () => {
        try {
           
            const res = await fetch("/getOrder", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"

                },
                credentials: "include"
            })

            const data =await res.json()
            setData(data)
            console.log(res.status);
            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            } else if (res.status === 401) {
                history("/")

            }

        } catch (err) {
            console.log(err, "he bhai he ")



        }
    }
    //console.log(data)
    useEffect(()=>{
        callHome()

    },[])
   return(
       <div>
      
       </div>

    )
    
  
}

export default Order
