import React from 'react'
import { Header } from '../../Components/Header/Header'
import { Flex, FlexRow } from '../../Components/UI/Flex/Flex'
import { category } from '../../LocalData/Category'
import { Categories } from '../Categories/Categories'

import { Products } from '../Products/Products'

import { Grid } from "../../Components/UI/Grid/Grid"

import './Home.css'
import { H2, H3, H5, H6, H7 } from '../../Components/Text/Text'

import { SearchBar } from '../../Components/SearchBar/SearchBar'
import { useNavigate } from 'react-router-dom'
import { Navigator } from '../../Components/Route/Router'

const Home = () => {

  const navigate = useNavigate()

  return (

    <div className='home'>


      <div className='home_header'>

        <img width="80px" src={require("../../Assets/Images/logo/logo.png")} />

        <SearchBar />

      </div>




      <img style={{ width: "100%", height: "200px", objectFit: "cover", marginBottom: "50px" }} src={require(`../../Assets/Images/product_banner/vegitablesbanner.jpg`)} alt="" />


      <H3 margin="20px 10px">Shop By Categories</H3>


      <div className='category_list' >


        {category.map(data =>

          <React.Fragment key={data.category}>

            <Navigator route={`/categories/${data.category}`}>

              <div>

                <img width="100px" height="100px" className="cate-img" src={require(`../../Assets/Images/product_banner/${data.image}`)} alt="" />

                <H7 fontWeight="bold" margin="10px 0">{data.product_name}</H7>

              </div>

            </Navigator>

          </React.Fragment >

        )}


      </div>



      {category.map(cate => (

        <div className='category' key={cate.category}>

          <Navigator route={`/categories/${cate.category}`}>

            <img style={{ width: "100%", height: "200px", objectFit: "cover" }} src={require(`../../Assets/Images/product_banner/${cate.banner_wide}`)} alt="" />

          </Navigator>


          <Flex>

            <H5 fontWeight="bold" margin="10px">{cate.product_name}</H5>

            <H5 color="tomato" fontWeight="bold" margin="10px" onClick={() => navigate(`categories/${cate.category}`)}>Load More</H5>

          </Flex>


          <Flex overflowX="scroll" >

            <Products category={cate.category} flexDirection="column" />

          </Flex>

        </div >

      ))}


    </div>

  )
}

export default Home;
