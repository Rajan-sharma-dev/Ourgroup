import HeaderLogin from "./HeaderLogin";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom'
//import HomeMiddle from './HomeMiddle';
//import Refferal from './Refferal';
//import Footer from './Footer';
import OrdersSidebar from "./Ordersidebar";
import { Route } from 'react-router-dom'
import Order from "./noorder";
import Rehna from "./CreateOrder";
import FooterCopy from "./FooterCopy";
import Store from "./Store";

const Homeji = ({ props }) => {
    console.log(props)
    const [name,setName]=useState()
    const history = useNavigate()
    const callHome = async () => {
        try {

            const res = await fetch("/Homehere", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"

                },
                credentials: "include"
            })
            const data=await res.json()
            console.log(data.data.name)
            setName(data.data.name)
            //console.log(res.status);
            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            } else if (res.status === 401) {
                history("/")

            }

        } catch (err) {
            console.log(err)



        }
    }
    useEffect(() => {
        callHome()

    }, [])

    return (<>
        <HeaderLogin name={name}/>
        <OrdersSidebar />
        <Outlet />
        <FooterCopy />


    </>)
}

export default Homeji