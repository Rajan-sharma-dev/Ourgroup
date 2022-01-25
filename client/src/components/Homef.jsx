
import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom'
import HomeMiddle from './HomeMiddle';
import Refferal from './Refferal';
import Footer from './Footer';
import { Route, Switch } from 'react-router-dom'

const Homeji = () => {
    const history = useHistory()
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

            //console.log(res)
            console.log(res.status);
            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            } else if (res.status === 401) {
                history.push("/")

            }

        } catch (err) {
            console.log(err, "he bhai he ")



        }
    }
    useEffect(() => {
        callHome()

    }, [])

    return (<>
        <h1>Rajan is here</h1>
        <Switch>
            <Route></Route>
        </Switch>

    </>)
}

export default Homeji