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


            <Header navigate="profile" title="confirm order" />


            <RadioCard  >


            </RadioCard >


            <Card width="100%">

                <Flex flexDirection="column" width="100%" >
                    <Flex flexDirection="column" width="100%" >

                        <H4 margin="10px" fontWeight="bold">Product Cost {total}</H4>
                    </Flex>


                    <H4 margin="10px" fontWeight="bold">Delivery Charge 10</H4>

                    <H4 margin="10px" fontWeight="bold">Total {total + 10}</H4>


                </Flex>
            </Card>



            <Flex width="100%" position="fixed" bottom="0" left="0" padding="60px 0">

                <Button color="white" onClick={prevPage} margin="10px">Back</Button>

                <Button color="blue" onClick={PlaceOrder} width="100%" margin="10px" >Confirm Order</Button>

            </Flex>


        </div >



    )
}
