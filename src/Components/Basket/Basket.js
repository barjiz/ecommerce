import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { H4 } from '../Text/Text'
import { Flex } from '../UI/Flex/Flex'

export const Basket = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const isGrocery = useSelector((state) => state.features.isGrocery)


    const cart = useSelector((state) => state.cart.cartItems)

    return (
        <div>

            <Flex justifyContent="end" alignItems="center"
                position="fixed" bottom="0" left="0" zIndex="90" >


                {cart.length > 0 && <Flex onClick={() => navigate("/cart")} width="80px" height="50px" margin="15px"
                    borderRadius="10px" padding="0 10px" backgroundColor="black" justifyContent="center" alignItems="center">
                    <i style={{ transtion: "0.5s", transform: isGrocery ? "rotate(0deg)" : "rotate(360deg)", color: "white", fontSize: "1rem", margin: "0 5px" }} class="fa-solid fa-cart-shopping"></i>
                    <H4 color="white" margin="0 5px" fontWeight="bold">{cart.length}</H4>
                </Flex>}



            </Flex>

        </div>
    )
}
