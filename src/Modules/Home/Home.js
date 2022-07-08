import React from 'react'
import { Flex } from '../../Components/UI/Flex/Flex'
import './Home.css'
import { Button } from '../../Components/Button/Button'
import { GroceryHome } from '../Grocery/GroceryHome'
import { FastFoodHome } from '../Fastfood/FastFoodHome'
import { useDispatch, useSelector } from 'react-redux'
import { setGrocery } from '../../Redux/featuresSlice'
import { H4 } from '../../Components/Text/Text'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isGrocery = useSelector((state) => state.features.isGrocery)


  const cart = useSelector((state) => state.cart.cartItems)



  return (

    <div className='home'>


      <Flex width="100%" justifyContent="space-between" padding="5px">

        <i style={{ fontSize: "2rem", marginLeft: "10px", color: "white" }} class="fa-solid fa-circle-user"></i>


        <img width="70px" src={require("../../Assets/Images/logo/logo.png")} alt="" />


        <i onClick={() => navigate("/profile")} style={{ fontSize: "2rem", marginRight: "10px", color: "black" }} class="fa-solid fa-circle-user"></i>


      </Flex>


      {isGrocery ? <GroceryHome /> : <FastFoodHome />}


      <Flex justifyContent="space-between" alignItems="center"
        position="fixed" bottom="0" left="0" zIndex="90" >

        <Flex width="60px" height="60px" margin="10px" onClick={() => dispatch(setGrocery(!isGrocery))}
          borderRadius="100%" backgroundColor={isGrocery ? "green" : "tomato"} justifyContent="center" alignItems="center">
          <i style={{ color: "white", fontSize: "1.3rem" }} class={isGrocery ? "fa-solid fa-g" : "fa-solid fa-f"}></i>
        </Flex>

        {cart.length > 0 && <Flex onClick={() => navigate("/cart")} width="fit-content" height="50px" margin="10px"
          borderRadius="10px" padding="0 10px" backgroundColor="black" justifyContent="center" alignItems="center">
          <i style={{ color: "white", fontSize: "1rem", margin: "0 5px" }} class="fa-solid fa-cart-shopping"></i>
          <H4 color="white" margin="0 5px" fontWeight="bold">{cart.length}</H4>
        </Flex>}

      </Flex>


    </div >

  )
}

export default Home;
