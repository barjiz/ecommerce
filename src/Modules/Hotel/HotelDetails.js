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

export const HotelDetails = (props) => {

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

        <div style={{ margin: "60px 0" }}>


            <Header icon={true} navigate={``} title={hotel_name} />


            {hotelfoods?.hotelFood.filter(fil => fil.hotel_id === id ).map(data =>

                JSON.parse(data.price).filter((fil, index) => index === 0).map(dd =>

                    <Flex borderBottom="1px solid grey" >

                        <Flex flexDirection="column" margin="20px 0" justifyContent="center" alignItems="center">

                            <img onClick={() => {
                                setDishDetails(true)
                                isDetailLoading(true);
                                setDishId(data._id)
                            }}

                                style={{
                                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                                    borderRadius: "10px",
                                    width: "150px",
                                    height: "150px",
                                    backgroundColor: "Red",
                                    objectFit: "cover"
                                }} src={data.image} className="card-img-top" alt="..." />


                        </Flex>

                        <Flex flexDirection="column" justifyContent="flex-start" alignItems="start">

                            <H4 fontWeight="bold" margin="10px 0">{data.name}</H4>

                            {dd.offer.length > 0 ?

                                <Flex margin="10px" justifyContent="flex-start">

                                    <H5 fontWeight="bold" color="green" ><del> ₹ {dd.price}</del></H5>

                                    <H5 borderRadius="30px" backgroundColor="#7B68EE" padding="2px 8px" fontWeight="bold" color="white" margin="0 10px">₹ {dd.offer}</H5>

                                </Flex>

                                :

                                <Flex margin="16px 10px" justifyContent="flex-start">

                                    <H5 fontWeight="bold" color="green">₹ {dd.price}</H5>

                                </Flex>}

                            {cart.some(ca => ca.product_id === data._id) ?

                                <Button width="150px" margin="10px 0"
                                    color="remove"
                                    onClick={() => {

                                        setDishDetails(true)
                                        isDetailLoading(true);
                                        setDishId(data._id)

                                    }}> Remove</Button>

                                :

                                <Button width="150px" margin="10px 0" color="tomato"

                                    onClick={() => handleAddToCart({
                                        product_id: data?._id,
                                        hotel_name: hotel_name,
                                        _id: dd._id,
                                        isQty: data?.qty,
                                        product_image: data?.image,
                                        product_name: data?.name,
                                        price: dd.price,
                                        weight: dd.weight,

                                    })}>Add</Button>

                            }

                        </Flex>


                    </Flex>



                ))}


            {
                dishDetails &&

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
