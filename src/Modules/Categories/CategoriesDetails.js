import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Products } from '../Products/Products'

import { Grid } from "../../Components/UI/Grid/Grid"

import "./CategoriesDetails.css"
import { OpacityBg } from '../../Components/UI/OpacityBg/OpacityBg'
import { DishesDetails } from '../Dishes/DishesDetails'
import { useDetailLoading } from '../../Utils/useLoading'

export const CategoriesDetails = () => {

    const { id } = useParams()

    const isDetailLoading = useDetailLoading()

    const [dishDetails, setDishDetails] = useState(false)

    const [dish_id, setDishId] = useState();


    return (
        <div className='categories_details' >

            <Grid >

                <Products
                    setDishId={setDishId}
                    className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2  col-xxl-2 pr-padd"
                    setDishDetails={setDishDetails}
                    width="100%"
                    height="180px"
                    category={id}
                    flexDirection="column" />

            </Grid>


            {dishDetails &&

                <>

                    <OpacityBg onClick={() => {
                        setDishDetails(false)
                        isDetailLoading(false)
                    }} />

                    <DishesDetails cartColor="green" setDishDetails={setDishDetails} dish_id={dish_id} />

                </>

            }

        </div >
    )
}
