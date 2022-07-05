import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button } from '../../Components/Button/Button'
import { H4, H5 } from '../../Components/Text/Text'
import { Flex } from '../../Components/UI/Flex/Flex'
import { Grid } from '../../Components/UI/Grid/Grid'
import { OpacityBg } from '../../Components/UI/OpacityBg/OpacityBg'
import { addToCart } from '../../Redux/cartSlice'
import { useDetailLoading } from '../../Utils/useLoading'
import { useQueryFetch, useQueryFetchId } from '../../Utils/useQueryFetch'
import { FastFoodDetails } from '../Fastfood/FastFoodDetails'
import { Header } from "../../Components/Header/Header"

export const HotelDetails = () => {

    const cart = useSelector((state) => state.cart.cartItems)


    const { id } = useParams();

    const [dishDetails, setDishDetails] = useState(false)

    const [dish_id, setDishId] = useState();


    const dispatch = useDispatch()


    const isDetailLoading = useDetailLoading()

    const { fetchData: hotelfoods } = useQueryFetch("hotelfoods")

    const { fetchData: hotel } = useQueryFetchId("hotel", id)

    const hotel_name = hotel?.data?.hotel_name

    const handleAddToCart = (data) => {
        dispatch(addToCart(data))
    }


    console.log("dish_id", dish_id)

    console.log("hotel", hotelfoods)


    return (

        <div style={{ marginTop: "60px" }}>


            <Header icon={true} navigate={``} title={hotel?.data?.hotel_name} />


            <Grid>

                {hotelfoods?.hotelFood.filter(fil => fil.hotel_id === id).map(data =>

                    <div style={{ margin: "10px 0" }} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2  col-xxl-2" key={data._id} >

                        <img onClick={() => {
                            setDishDetails(true)
                            isDetailLoading(true);
                            setDishId(data._id)
                        }}

                            style={{
                                width: "100%",
                                height: "150px",
                                backgroundColor: "Red",
                                objectFit: "cover"
                            }} src={data.food_image} className="card-img-top" alt="..." />


                        <H4 fontWeight="bold" margin="10px 0">{data.food_name}</H4>

                        {JSON.parse(data.price).filter((fil, index) => index === 0).map(dd =>

                            <>

                                <Flex onClick={() => {
                                    setDishDetails(true)
                                    isDetailLoading(true);
                                    setDishId(data._id)
                                }}
                                    backgroundColor="rgba(255, 99, 71, 0.162)" padding="3px 10px"
                                    margin="10px 0px" borderRadius="5px">

                                    <H5 textTransform="lowercase" color="tomato" fontWeight="bold" >{dd.weight}</H5>
                                    <i style={{ fontSize: "1rem" }} class="fa-solid fa-chevron-down"></i>

                                </Flex>

                                {dd.offer.length > 0 ?
                                    <Flex margin="10px" justifyContent="flex-start">
                                        <H5 fontWeight="bold" color="green" >
                                            {/* <del>  */}
                                            ₹ {dd.price}
                                            {/* </del> */}
                                        </H5>
                                        <H5 borderRadius="30px" backgroundColor="#7B68EE" padding="2px 8px" fontWeight="bold" color="white" margin="0 10px">₹ {dd.offer}</H5>

                                    </Flex>

                                    :

                                    <Flex margin="16px 10px" justifyContent="flex-start">
                                        <H5 fontWeight="bold" color="green">₹ {dd.price}</H5>
                                    </Flex>

                                }


                                {cart.some(ca => ca.product_id === data._id) ?

                                    <Button width="100%"
                                        color="white"
                                        onClick={() => {

                                            setDishDetails(true)
                                            isDetailLoading(true);
                                            setDishId(data._id)

                                        }}> Remove</Button>

                                    :

                                    <Flex>

                                        <Button width="100%" color="orange"

                                            onClick={() => handleAddToCart({
                                                product_id: data?._id,
                                                hotel_name: hotel_name,
                                                _id: dd._id,
                                                isQty: data?.qty,
                                                product_image: data?.food_image,
                                                product_name: data?.food_name,
                                                price: dd.price,
                                                weight: dd.weight,

                                            })}>Add</Button>

                                    </Flex>

                                }
                            </>

                        )}


                    </div>

                )
                }

            </Grid >



            {dishDetails &&

                <>

                    <OpacityBg onClick={() => {
                        setDishDetails(false)
                        isDetailLoading(false)
                    }} />

                    <FastFoodDetails cartColor="green" hotel_name={hotel_name} setDishDetails={setDishDetails} dish_id={dish_id} />

                </>
            }

        </div >

    )
}
