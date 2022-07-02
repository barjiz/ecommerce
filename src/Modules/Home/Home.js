import React, { useState } from 'react'
import { Flex } from '../../Components/UI/Flex/Flex'
import { category } from '../../LocalData/Category'
import { Products } from '../Products/Products'
import './Home.css'
import { H3, H5, H6 } from '../../Components/Text/Text'
import { SearchBar } from '../../Components/SearchBar/SearchBar'
import { useNavigate } from 'react-router-dom'
import { Navigator } from '../../Components/Route/Router'
import { Grid } from '../../Components/UI/Grid/Grid'
import { SwiperSlide } from 'swiper/react'
import { SwiperCarousel } from '../../Components/Slider/SwiperCarousel/SwiperCarousel'
import { Button } from '../../Components/Button/Button'
import { Grocery } from '../Grocery/Grocery'
import { Fastfood } from '../Fastfood/Fastfood'
import { useDispatch, useSelector } from 'react-redux'
import { setGrocery } from '../../Redux/featuresSlice'

const Home = () => {

  const [tabs, setTabs] = useState(1)


  const dispatch = useDispatch();

  const isGrocery = useSelector((state) => state.features.isGrocery)

  console.log("isGrocery", isGrocery)


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
          color={isGrocery === false ? "danger" : "gray"}
          width="100%">fast food</Button>

      </Flex>


      {isGrocery ? <Grocery /> : <Fastfood />}

      {console.log("windwo", window.innerWidth)}


    </div >

  )
}

export default Home;
