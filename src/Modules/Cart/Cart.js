import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../Components/Button/Button'
import { Card } from '../../Components/Card/Card'
import { H3, H4 } from '../../Components/Text/Text'
import { Flex } from '../../Components/UI/Flex/Flex'
import { remove } from '../../Redux/cartSlice'
import { useDispatch } from 'react-redux'
import { IconRound } from "../../Components/Icon/Icon"
import { Header } from "../../Components/Header/Header"
import { addToCart, cartQty } from '../../Redux/cartSlice'
import "./Cart.css"
import { DropDown, DropDown2 } from '../../Components/Input/Input'
import { Navigator } from '../../Components/Route/Router'

export const Cart = ({ nextPage }) => {

  const cart = useSelector((state) => state.cart.cartItems)


  const qtyy = useSelector((state) => state.cart.cartTotalQuantity)


  let navigate = useNavigate()

  const dispatch = useDispatch()

  const [qty, setQty] = useState(1)

  console.log("cart", cart)

  console.log("qtyy", qtyy)




  const getSumByKey = (arr, key) => {
    return cart.reduce((accumulator, current) => accumulator + Number(current[key]), 0)
  }

  const total = getSumByKey(cart, 'price') // 9

  const handleAddToCart = (product) => {

    dispatch(cartQty(product))
  }




  return (

    <div className="cart">


      <Header backgroundColor="white" justifyContent="space-between" position="fixed">

        <i onClick={() => navigate('/')} class="fa-solid fa-chevron-left"></i>

        <H3 fontWeight="bold" >Cart</H3>

        <i style={{ color: 'white' }} class="fa-solid fa-chevron-left"></i>


      </Header>
      {cart.length === 0 ? (

        <div className="emptyCart">

          <i class="fa-solid fa-bag-shopping"></i>

          <h4>Your Basket is empty</h4>

          <Button onClick={() => navigate("/")}>Start Shopping</Button>

        </div>

      ) : (

        <div>


          {cart?.map(da => (

            <React.Fragment key={da._id}>

              <Card >


                <Flex backgroundColor="white" width="100%" justifyContent="space-between">


                  < Navigator route={`/productdetails/${da._id}`}>

                    <img style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      flex: "1",
                    }} src={da.product_image} class="card-img-top" alt="..." />

                  </Navigator>


                  <Flex flex="3" width="fit-content" flexDirection="column" justifyContent="start" alignItems="start">

                    <H4 maxWidth="100px" fontWeight="bold" maxHeight="1.4rem" margin="5px 20px">{da.product_name}</H4>


                    <H4 margin="5px 20px" borderRadius="5px" padding="3px 10px"
                      backgroundColor="rgba(255, 99, 71, 0.162)" textTransform="lowercase" color="tomato" fontWeight="bold" >{da.weight}</H4>


                    <H4 fontWeight="bold" color="green" margin="5px 20px">₹ {qtyy * da.price}</H4>

                  </Flex>


                  <Button color="dodgerblue" width="10px" margin="10px" onClick={() => dispatch(cartQty(da.qty - 1))}>-</Button>

                  {da.qty}

                  <Button color="dodgerblue" width="10px" margin="10px" onClick={() => dispatch(cartQty(da.qty + 1))}>+</Button>

                  {/* <IconRound backgroundColor="red"
                    width="44px" height="44px"
                    margin="0"
                    icon="fa-solid fa-trash" onClick={() => dispatch(remove(da))}></IconRound> */}


                </Flex>

              </Card>



            </React.Fragment >



          ))}



          <div className='check_out'>


            <H3>Total: {total}</H3>

            <Button width="fit-content" color="blue" onClick={nextPage}>Check out</Button>


          </div>


        </div>


      )
      }

    </div >
  )
}
