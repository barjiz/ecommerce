import React from 'react'

import { category } from '../../LocalData/Category'

import { H5 } from "../../Components/Text/Text"
import { Navigator } from '../../Components/Route/Router'

import "./Categories.css"
import { Flex } from '../../Components/UI/Flex/Flex'
import { Header } from '../../Components/Header/Header'
import { SearchBar } from '../../Components/SearchBar/SearchBar'

export const Categories = (props) => {
  return (

    <div className='categories'>

      <div className='categories_header'>

        <img width="80px" src={require("../../Assets/Images/logo/logo.png")} />

        <SearchBar />

      </div>

      {category.map(data =>

        <React.Fragment key={data.category}>

          <Navigator route={`/categories/${data.category}`}>

            <Flex margin="10px 0" flexDirection={props.flexDirection} backgroundColor="rgb(255, 245, 219)" justifyContent="space-between">

              <H5 fontWeight="bold" margin="10px">{data.product_name}</H5>

              <img width="30%" className="cate-img" src={require(`../../Assets/Images/product_banner/${data.image}`)} alt="" />

            </Flex>

          </Navigator>

        </React.Fragment >

      )}

    </div >
  )
}
