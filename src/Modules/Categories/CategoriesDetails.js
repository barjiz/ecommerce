import React from 'react'
import { useParams } from 'react-router-dom'
import { Products } from '../Products/Products'

import { Grid } from "../../Components/UI/Grid/Grid"
import { SearchBar } from '../../Components/SearchBar/SearchBar'
import { Flex } from '../../Components/UI/Flex/Flex'

export const CategoriesDetails = () => {

    const { id } = useParams()


    return (
        <div >

            <Flex zIndex="100" position="fixed" top="0">

                <SearchBar />

            </Flex>

            <div style={{ margin: "60px 0" }}>

                <Grid >

                    <Products category={id} />

                </Grid>

            </div>



        </div>
    )
}
