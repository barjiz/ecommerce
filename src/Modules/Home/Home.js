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

const Home = () => {

  const navigate = useNavigate()

  const [menuBar, setMenuBar] = useState(false)


  const style = {
    left: "-260px"
  }

  if (menuBar) {
    style.left = "0"
  }
  else {
    style.left = "-100%"
  }


  const banner = [
    {
      image: "vegitablesbanner.jpg",

    },
    {
      image: "bakerycakebanner.jpg",

    },
    {
      image: "foodgrainsoilbanner.jpg",

    }
  ]

  return (

    <div className='home'>


      <div className='nav_small'>

        <img style={{ margin: "0 10px" }} width="80px" src={require("../../Assets/Images/logo/logo.png")} />

        <SearchBar />

      </div>


      <SwiperCarousel>


        {banner.map(data => (

          <SwiperSlide>

            <img width="100%" height="200px"
              src={require(`../../Assets/Images/product_banner/${data.image}`)} alt="" />

          </SwiperSlide>

        ))}


      </SwiperCarousel>


      <H3 margin="20px 10px">Shop By Categories</H3>


      <Grid>

        {category.map(data =>

          <div className='col-4 col-sm-3 col-md-3 col-lg-3 col-xl-2  col-xxl-2'>
            <Navigator route={`/categories/${data.category}`}>
              <img width="100%" className="cate-img" src={require(`../../Assets/Images/product_banner/${data.image}`)} alt="" />

              <H6 fontWeight="bold" margin="10px 0">{data.product_name}</H6>

            </Navigator>

          </div>

        )}

      </Grid>


      {category.map(cate => (

        <div className='category' key={cate.category}>


          <img width="100%" height="170px" onClick={() => navigate(`/categories/${cate.category}`)} style={{ cursor: "pointer" }} src={require(`../../Assets/Images/product_banner/${cate.banner_wide}`)} alt="" />


          <Flex>

            <H3 fontWeight="bold" margin="10px">{cate.product_name}</H3>

            <H5 color="tomato" fontWeight="bold" margin="10px" onClick={() => navigate(`/categories/${cate.category}`)}>Load More</H5>

          </Flex>


          <Flex overflowX="scroll" >

            <Products
              width="120px"
              height="120px"
              category={cate.category} flexDirection="column" />

          </Flex>

        </div >

      ))
      }

    </div >

  )
}

export default Home;
