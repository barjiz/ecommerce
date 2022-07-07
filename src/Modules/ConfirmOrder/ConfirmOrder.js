import React from 'react'
import { Button } from '../../Components/Button/Button'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { H3, H4, H5 } from '../../Components/Text/Text';
import "./ConfirmOrder.css"
import { BASE_URL } from '../../url';
import { Flex } from '../../Components/UI/Flex/Flex';
import { Header } from '../../Components/Header/Header';
import { RadioCard } from '../../Components/Radio/RadioCard';
import { decodeJwtToken } from '../../Utils/decode.jwt';
import { Card } from "../../Components/Card/Card"

export const ConfirmOrder = ({ prevPage, address }) => {

    const cart = useSelector((state) => state.cart)


    const navigate = useNavigate()

    const user_id = decodeJwtToken();

    const total = useSelector((state) => state.cart.cartTotalAmount)


    const PlaceOrder = () => {

        axios.post(`${BASE_URL}order`, {

            date: Date(),

            user_id: user_id,

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


            <Header icon={true} onClick={prevPage} title="confirm order" />

            <Flex flexDirection="column" justifyContent="start" alignItems="start">


                <H4 margin="15px" fontWeight="bold">Payment Method</H4>

                <Flex width="95%" justifyContent="start"
                    boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                    margin="auto" backgroundColor="white" padding="10px">

                    <i class="fa-solid fa-indian-rupee-sign"></i>
                    <H4 margin="10px">Pay on Delivery</H4>
                </Flex>

            </Flex>



            <Flex width="100%" position="fixed" bottom="0" left="0">

                <Button color="blue" onClick={PlaceOrder} width="100%" margin="10px" >Confirm Order</Button>

            </Flex>


        </div >



    )
}
