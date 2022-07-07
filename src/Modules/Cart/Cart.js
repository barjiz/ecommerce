import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../Components/Button/Button'
import { Card } from '../../Components/Card/Card'
import { H3, H4, H5 } from '../../Components/Text/Text'
import { Flex } from '../../Components/UI/Flex/Flex'
import { addToCart, decreaseCart, getTotals } from '../../Redux/cartSlice'
import { useDispatch } from 'react-redux'
import { Header } from "../../Components/Header/Header"
import "./Cart.css"
import { Navigator } from '../../Components/Route/Router'
import { ResponsiveWrap } from '../../Components/UI/ResponsiveWrap/ResponsiveWrap'
import { useEffect } from 'react'
import { useLoading } from '../../Utils/useLoading'

export const Cart = ({ nextPage }) => {

  const cart = useSelector((state) => state.cart)



  let navigate = useNavigate()

  const dispatch = useDispatch()


  const isLoading = useLoading()


  useEffect(() => {

    dispatch(getTotals())

  }, [cart, dispatch])


  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem))
  }

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem))
  }

  const CheckOut = () => {


    nextPage()
  }

  return (

    <ResponsiveWrap>


      <Header icon={false} title="cart" />


      {cart.cartItems.length === 0 ? (

        <div className="emptyCart">

          <i class="fa-solid fa-bag-shopping"></i>

          <h4>Your Basket is empty</h4>

          <Button onClick={() => navigate("/")}>Start Shopping</Button>

        </div>

      ) : (

        <div>


          {cart.cartItems.map(cartItem => (

            <React.Fragment key={cartItem._id}>

              <Card margin="10px 0" padding="10px 0" >

                <Flex backgroundColor="white" width="100%" justifyContent="space-between">

                  <Flex width="fit-content" position="relative" margin="10px">

                    <img style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      flex: "1",
                    }} src={cartItem.product_image} class="card-img-top" alt="..." />


                    <Flex position="absolute" top="0" left="0">

                      <H4 backgroundColor="red" padding="2px 10px" borderRadius="0"
                        textTransform="lowercase" color="white" fontWeight="bold">{cartItem.weight}</H4>

                    </Flex>

                  </Flex>

                  <Flex flex="3" width="fit-content" flexDirection="column" justifyContent="start" alignItems="start">

                    <H4 maxWidth="100px" margin="5px" fontWeight="bold" maxHeight="1.2rem">{cartItem.product_name}</H4>

                    <H5 margin="5px" >
                      <del>
                        ₹{cartItem.price * cartItem.cartQuanity}
                      </del>
                    </H5>

                    <H5 fontWeight="bold" margin="5px">
                      ₹{cartItem.offer * cartItem.cartQuanity}
                    </H5>

                    {cartItem.hotel_name && <H4 backgroundColor="tomato" padding="4px 10px" color="white" margin="10px" textTransform="lowercase"
                      fontWeight="bolder">{cartItem.hotel_name}</H4>
                    }

                  </Flex>

                  <Flex flex="3">

                    <Button color="white" margin="5px" height="10px" onClick={() => handleDecreaseCart(cartItem)}>-</Button>


                    <H4 >{cartItem.cartQuanity}</H4>


                    {cartItem.isQty ?

                      <Button color="white" margin="5px" height="10px" onClick={() => handleIncreaseCart(cartItem)}>+</Button>
                      :
                      <Button height="10px" margin="5px">+</Button>
                    }


                  </Flex>


                </Flex>

              </Card>



            </React.Fragment >



          ))}



          <div className='check_out'>


            <H3>Total: {cart.cartTotalAmount} </H3>

            <Button width="fit-content" color="blue" onClick={CheckOut}>Check out</Button>


          </div>


        </div>


      )
      }

    </ResponsiveWrap >
  )
}
