import React from 'react'
import { useParams } from 'react-router-dom'
import { Grid } from "../../Components/UI/Grid/Grid"
import "./CategoriesDetails.css"
import { Grocery } from '../Grocery/Grocery'

export const CategoriesDetails = () => {

    const { id } = useParams()

    return (
        <div className='categories_details' >

            <Grid >

                <Grocery

                    className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2  col-xxl-2 pr-padd"
                    width="100%"
                    height="180px"
                    category={id}
                    flexDirection="column" />

            </Grid>


        </div >
    )
}
