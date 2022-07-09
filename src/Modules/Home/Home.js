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
import { Toggle } from '../../Components/Toggle/Toggle'
import { Basket } from '../../Components/Basket/Basket'

const Home = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isGrocery = useSelector((state) => state.features.isGrocery)


  const cart = useSelector((state) => state.cart.cartItems)

  navigator.geolocation.getCurrentPosition(function (position) {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
  });



  return (

    <div className='home'>


      <Flex width="100%" justifyContent="space-between" padding="5px">

        <Flex width="fit-content" margin="0 10px">

          <img width="70px" src={require("../../Assets/Images/logo/logo.png")} alt="" />

        </Flex>


        <Flex width="fit-content" margin="0 10px">

          <Toggle id="1" onClick={() => dispatch(setGrocery(!isGrocery))}
            defaultChecked={isGrocery ? false : true}></Toggle>


          <i onClick={() => navigate("/profile")} style={{ fontSize: "2rem", color: "black" }} class="fa-solid fa-circle-user"></i>


        </Flex>

      </Flex>


      {isGrocery ? <GroceryHome /> : <FastFoodHome />}


      <Basket />


    </div >

  )
}

export default Home;
