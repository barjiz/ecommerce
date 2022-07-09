import React, { useState } from 'react'
import { Button } from "../../Components/Button/Button"
import { Navigator } from '../../Components/Route/Router'
import { addToCart, decreaseCart, removeFromCart } from '../../Redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { H5 } from '../../Components/Text/Text'
import { Flex } from '../../Components/UI/Flex/Flex'
import { useQueryFetch } from '../../Utils/useQueryFetch'
import { useNavigate } from 'react-router-dom'
import { useDetailLoading, useLoading } from '../../Utils/useLoading'
import { OpacityBg } from '../../Components/UI/OpacityBg/OpacityBg'
import { GroceryDetails } from './GroceryDetails'
import { LazyImage } from '../../Components/LazyImage/LazyImage'

const Grocery = (props) => {

    const { category, className } = props;

    const [dishDetails, setDishDetails] = useState(false)

    const [dish_id, setDishId] = useState();


    const isDetailLoading = useDetailLoading()

    const cart = useSelector((state) => state.cart.cartItems)

    const { fetchData: product } = useQueryFetch('product')

    const dispatch = useDispatch()

    const handleAddToCart = (data) => {
        dispatch(addToCart(data))
    }

    // var price = 100;
    // var offer = 90;
    // var percent = ;
    // console.log(percent); // 90.0 


    return (

        <React.Fragment>

            {product?.filter(fil => fil.category === category).map(data => (


                JSON.parse(data.price).filter((fil, index) => index === 0).map(dd =>


                    <div className={className} >

                        <div key={data._id} class="card" style={{ display: "flex", flexDirection: "column", margin: props.margin }}>


                            <Flex position="relative">
                                <Flex>
                                    <LazyImage
                                        width={props.width}
                                        height={props.height}
                                        objectFit="cover"
                                        src={data.productImage}

                                        //    onclick    
                                        onClick={() => {
                                            setDishDetails(true)
                                            isDetailLoading(true);
                                            setDishId(data._id)
                                        }}

                                    />

                                </Flex>


                                <Flex position="absolute" top="0" left="0" >
                                    <H5 padding="5px 10px"
                                        backgroundColor="green" color="white" fontWeight="bold">{dd.offer * 100 / dd.price}% off</H5>
                                </Flex>

                            </Flex>

                            <H5 width="100%" maxWidth="100px" fontWeight="bold" maxHeight="1.4rem" margin="10px 5px">{data.product_name}</H5>


                            <Flex onClick={() => {
                                setDishDetails(true)
                                isDetailLoading(true);
                                setDishId(data._id)
                            }}
                                width="fit-content" justifyContent="start"
                                backgroundColor="rgba(255, 99, 71, 0.162)" padding="3px 10px"
                                margin="10px 0px" borderRadius="5px">

                                <H5 textTransform="lowercase" color="tomato" fontWeight="bold" >{dd.weight}</H5>
                                <i style={{ fontSize: "1rem", marginLeft: "10px" }} class="fa-solid fa-chevron-down"></i>

                            </Flex>

                            {dd.offer != dd.price ?

                                <Flex margin="10px" justifyContent="flex-start">

                                    <H5 fontWeight="bold" margin="0 10px 0 0">₹ {dd.offer}</H5>

                                    <H5>
                                        <del>
                                            ₹ {dd.price}
                                        </del>
                                    </H5>

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

                                    <Button width="100%" color="green"

                                        onClick={() => handleAddToCart({
                                            category: data?.category,
                                            product_id: data?._id,
                                            _id: dd._id,
                                            isQty: data?.qty,
                                            product_image: data?.productImage,
                                            product_name: data?.product_name,
                                            price: dd.price,
                                            offer: dd.offer,
                                            weight: dd.weight,

                                        })}>Add</Button>

                                </Flex>

                            }



                        </div>
                    </div>
                )))
            }


            {
                dishDetails &&

                <>

                    <OpacityBg onClick={() => {
                        setDishDetails(false)
                        isDetailLoading(false)
                    }} />

                    <GroceryDetails cartColor="green" setDishDetails={setDishDetails} dish_id={dish_id} />

                </>

            }


        </React.Fragment >

    )
}

export default Grocery;