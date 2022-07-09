import React, { useState } from 'react'
import { Flex } from '../../Components/UI/Flex/Flex'
import './Home.css'
import { GroceryHome } from '../Grocery/GroceryHome'
import { FastFoodHome } from '../Fastfood/FastFoodHome'
import { useNavigate } from 'react-router-dom'
import { Toggle } from '../../Components/Toggle/Toggle'
import { Basket } from '../../Components/Basket/Basket'
import { useEffect } from 'react'

const Home = () => {

  const navigate = useNavigate();

  const boolean = JSON.parse(localStorage.getItem('isGrocery'));

  const [isGrocery, setIsGrocery] = useState(boolean)

  console.log("isGrocery", isGrocery)


  useEffect(() => {

    if (isGrocery) {

      localStorage.setItem('isGrocery', true);

    }
    else {
      localStorage.setItem('isGrocery', false);

    }

  })


  return (

    <div className='home'>


      <Flex width="100%" justifyContent="space-between" padding="5px">

        <Flex width="fit-content" margin="0 10px">

          <img width="70px" src={require("../../Assets/Images/logo/logo.png")} alt="" />

        </Flex>


        <Flex width="fit-content" margin="0 10px">

          <Toggle id="1" onClick={() => setIsGrocery(!isGrocery)}

            defaultChecked={isGrocery ? true : false}
          ></Toggle>


          <i onClick={() => navigate("/profile")} style={{ fontSize: "2rem", color: "black" }} class="fa-solid fa-circle-user"></i>


        </Flex>

      </Flex>
    

      {isGrocery != null ? isGrocery ? <FastFoodHome /> : <GroceryHome /> : <GroceryHome />}

      <Basket />


    </div >

  )
}

export default Home;
