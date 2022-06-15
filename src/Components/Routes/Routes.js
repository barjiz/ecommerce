import React, { useEffect, useState } from 'react'
import { Route, Routes, } from 'react-router-dom'
import { Login } from '../../Modules/Auth/Login'
import jwt_decode from "jwt-decode";
import { NotFound } from './NotFound/NotFound';
import { elements } from './elements';



export const AllRoutes = (props) => {

    const [token, setToken] = useState(localStorage.getItem("authToken"))

    const decoded = token ? jwt_decode(token) : "null";


    useEffect(() => {


        if (decoded.exp * 1000 < new Date().getTime()) {

            localStorage.removeItem("authToken")

            window.location.reload()

        }


    }, [])


    return (

        <Routes>

            {elements.map(data => (

                <Route path={data.path} element={data.isAuth ? localStorage.getItem("authToken") ? data.element : <Login /> : data.element} />

            ))}

            <Route path="*" element={<NotFound />} />

        </Routes>

    )
}




