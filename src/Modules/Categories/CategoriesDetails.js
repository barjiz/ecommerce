import React from 'react'
import { useParams } from 'react-router-dom'
import { Products } from '../Products/Products'

import { Grid } from "../../Components/UI/Grid/Grid"

import "./CategoriesDetails.css"

export const CategoriesDetails = () => {

    const { id } = useParams()


    return (
        <div className='categories_details' >

            <Grid >

                <Products
                    width="100%"
                    height="180px"
                    class="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2  col-xxl-2" category={id} />

            </Grid>


        </div >
    )
}
