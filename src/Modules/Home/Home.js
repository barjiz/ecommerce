import React from 'react'
import { Flex } from '../../Components/UI/Flex/Flex'
import './Home.css'
import { Button } from '../../Components/Button/Button'
import { GroceryHome } from '../Grocery/GroceryHome'
import { FastFoodHome } from '../Fastfood/FastFoodHome'
import { useDispatch, useSelector } from 'react-redux'
import { setGrocery } from '../../Redux/featuresSlice'

const Home = () => {

  const dispatch = useDispatch();

  const isGrocery = useSelector((state) => state.features.isGrocery)

  return (

    <div className='home'>


      <Flex width="100%">


        <Button
          onClick={() => dispatch(setGrocery(true))}
          borderRadius="0"
          color={isGrocery === true ? "green" : "gray"}
          width="100%">grocery</Button>


        <Button
          onClick={() => dispatch(setGrocery(false))}
          borderRadius="0"
          color={isGrocery === false ? "orange" : "gray"}
          width="100%">fast food</Button>




      </Flex>


      {isGrocery ? <GroceryHome /> : <FastFoodHome />}


    </div >

  )
}

export default Home;
