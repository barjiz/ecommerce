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
import { ManageAddress } from '../DeliveryForm/ManageAddress'
import { OpacityBg } from '../../Components/UI/OpacityBg/OpacityBg'
import { category } from '../../LocalData/Category'

export const Cart = (props) => {

  const { nextPage, setAddress, address } = props;

  const cart = useSelector((state) => state.cart)

  console.log("Cart", cart.cartItems)


  let navigate = useNavigate()

  const dispatch = useDispatch()

  const [selectAddress, setSelectAddress] = useState(false);

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

    <div className='cart'>


      <Header back={() => navigate("/")} title="cart" />


      {cart.cartItems.length === 0 ? (

        <div className="emptyCart">

          <i class="fa-solid fa-bag-shopping"></i>

          <h4>Your Basket is empty</h4>

          <Button onClick={() => navigate("/")}>Start Shopping</Button>

        </div>

      ) : (

        <div className='cart_items'>

          {/* {category.map(cate =>

            <> */}


              {
                // cart.cartItems.filter(fil => fil.category === cate.category).map(cartItem => (
                  cart.cartItems.map(cartItem => (

                  <React.Fragment key={cartItem._id}>

                    <Card margin="10px" padding="0" >

                      <Flex width="100%" justifyContent="space-between">

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

                        <Flex justifyContent="center" flex="3" margin="0 10px"
                          borderRadius="5px" backgroundColor="tomato" >

                          <Flex justifyContent="center" alignItems="center" onClick={() => handleDecreaseCart(cartItem)}>
                            <i style={{ fontSize: "1rem", color: "white" }} class="fa-solid fa-minus"></i>
                          </Flex>

                          <Flex backgroundColor="white" padding="10px 0" justifyContent="center" alignItems="center">
                            <H4 >{cartItem.cartQuanity}</H4>
                          </Flex>

                          <Flex justifyContent="center" alignItems="center" onClick={() => handleIncreaseCart(cartItem)}>
                            <i style={{ fontSize: "1rem", color: "white" }} class="fa-solid fa-plus"></i>
                          </Flex>

                        </Flex>

                      </Flex>

                    </Card>



                  </React.Fragment >

                ))
              }
{/* 
            </>
          )} */}



          <H4 margin="15px" fontWeight="bold">Bill Details</H4>

          <Card margin="10px">


            <Flex backgroundColor="White" flexDirection="column" >

              <Flex padding="10px" justifyContent="space-between" bottomBorder="1px solid grey">
                <H4>Item Total</H4>
                <H4>₹{cart.cartTotalAmount} </H4>
              </Flex>

              <Flex padding="10px" justifyContent="space-between" bottomBorder="1px solid grey">
                <H4>Delivery Charge</H4>
                <H4>₹20</H4>

              </Flex>


              <Flex padding="10px" justifyContent="space-between" bottomBorder="1px solid grey">
                <H4 fontWeight="bold">Pay</H4>
                <H4 fontWeight="bold">₹{cart.cartTotalAmount + 20} </H4>
              </Flex>

            </Flex>

            <Flex position="fixed" backgroundColor="white"
              bottom="0" left="0" justifyContent="center" padding="10px">

              {address.length === 0 ?

                <Button fontWeight="bold" width="90%" color="red"
                  onClick={() => setSelectAddress(true)}>Select Address</Button>
                :

                <Button fontWeight="bold" width="90%" color="green" onClick={CheckOut}>Check out</Button>
              }

            </Flex>

          </Card>





          {selectAddress &&


            <OpacityBg>

              <ManageAddress
                nextPage={nextPage}
                setSelectAddress={setSelectAddress}
                setAddress={setAddress}
              />

            </OpacityBg>}



        </div>

      )
      }

    </div >
  )
}
