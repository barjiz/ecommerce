import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../Components/Button/Button'
import { Card } from '../../Components/Card/Card'
import { H3, H4 } from '../../Components/Text/Text'
import { Flex } from '../../Components/UI/Flex/Flex'
import { addToCart, decreaseCart, getTotals } from '../../Redux/cartSlice'
import { useDispatch } from 'react-redux'
import { Header } from "../../Components/Header/Header"
import "./Cart.css"
import { Navigator } from '../../Components/Route/Router'
import { ResponsiveWrap } from '../../Components/UI/ResponsiveWrap/ResponsiveWrap'
import { useEffect } from 'react'

export const Cart = ({ nextPage }) => {

  const cart = useSelector((state) => state.cart)



  let navigate = useNavigate()

  const dispatch = useDispatch()


  useEffect(() => {

    dispatch(getTotals())

  }, [cart, dispatch])


  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem))
  }

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem))
  }


  const myCart = JSON.parse(localStorage.getItem("cartItems"))


  return (

    <ResponsiveWrap>


      <Header>

        <i onClick={() => navigate('/')} class="fa-solid fa-chevron-left"></i>

        <H3 fontWeight="bold" >Cart</H3>

        <i style={{ color: 'white' }} class="fa-solid fa-chevron-left"></i>

      </Header>


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


                  < Navigator route={`/product/${cartItem._id}`}>

                    <img style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      flex: "1",
                    }} src={cartItem.product_image} class="card-img-top" alt="..." />

                  </Navigator>


                  <Flex flex="3" width="fit-content" flexDirection="column" justifyContent="start" alignItems="start">

                    <H4 maxWidth="100px" fontWeight="bold" maxHeight="1.2rem" margin="5px 20px">{cartItem.product_name}</H4>


                    <H4 margin="5px 20px" borderRadius="5px" padding="3px 10px"
                      backgroundColor="rgba(255, 99, 71, 0.162)" textTransform="lowercase" color="tomato" fontWeight="bold" >{cartItem.weight}</H4>


                    <H4 fontWeight="bold" color="green" margin="5px 20px">₹ {cartItem.price * cartItem.cartQuanity}</H4>

                  </Flex>

                  <Flex  flex="3">


                    <Button color="white" width="10px" margin="10px" onClick={() => handleDecreaseCart(cartItem)}>-</Button>

                    {cartItem.cartQuanity}

        
                    {cartItem.isQty ?

                      <Button color="white" width="10px" margin="10px" onClick={() => handleIncreaseCart(cartItem)}>+</Button>
                      :
                      <Button width="10px" margin="10px">+</Button>
                    }


                  </Flex>


                </Flex>

              </Card>



            </React.Fragment >



          ))}



          <div className='check_out'>


            <H3>Total: {cart.cartTotalAmount} </H3>

            <Button width="fit-content" color="blue" onClick={nextPage}>Check out</Button>


          </div>


        </div>


      )
      }

    </ResponsiveWrap >
  )
}
