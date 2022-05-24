import React from 'react'
import { useNavigate } from 'react-router-dom'
import './OrderSuccess.css'


export const OrderSuccess = () => {

    let navigate = useNavigate()

    return (

        <div className="ordersuccess">

            <i className="fas fa-check-circle circle"></i>

            <h1>Your Order Complete!</h1>

            <h2>We will Contact you shortly</h2>

            <button onClick={() => navigate("/")}>Return to Homepage</button>

        </div>

    )
}

export default OrderSuccess
