import React from 'react'
import { Button } from '../../Components/Button/Button'
import axios from 'axios';


import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { H3, H5 } from '../../Components/Text/Text';

import "./ConfirmOrder.css"
import { BASE_URL } from '../../url';
import { Flex } from '../../Components/UI/Flex/Flex';
import { Header } from '../../Components/Header/Header';
import { RadioCard } from '../../Components/Radio/RadioCard';

export const ConfirmOrder = ({ prevPage, address }) => {

    const cart = useSelector((state) => state.cart)


    const navigate = useNavigate()

    var token = localStorage.getItem("authToken");
    var decoded = jwt_decode(token);


    const PlaceOrder = () => {

        axios.post(`${BASE_URL}order`, {

            date: Date(),

            user_id: decoded.id,

            cart: {
                product: cart.cartItems,
                total: cart.cartTotalAmount
            },
            address: address,

        }).then(() => {

            navigate("/ordersuccess")
            window.location.reload();
        })

    }


    return (

        <div className='confirmOrder'>


            <Header justifyContent="space-between">

                <i onClick={prevPage} class="fa-solid fa-chevron-left"></i>

                <H3 fontWeight="bold" >Confirm Order</H3>

                <i style={{ color: 'white' }} class="fa-solid fa-chevron-left"></i>


            </Header>


            <RadioCard  >

                <H5>Cash on delivery</H5>

            </RadioCard >


            <Flex width="100%" position="fixed" bottom="0" left="0" padding="60px 0">

                <Button color="white" onClick={prevPage} margin="10px">Back</Button>

                <Button color="blue" onClick={PlaceOrder} width="100%" margin="10px" >Confirm Order</Button>

            </Flex>


        </div>



    )
}
