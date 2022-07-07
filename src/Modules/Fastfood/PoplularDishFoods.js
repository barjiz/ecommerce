import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
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
import "./PoplularDishFoods.css"

export const PoplularDishFoods = (props) => {

    const { hotel_name, hotel_id, category } = props;

    const cart = useSelector((state) => state.cart.cartItems)


    const { id } = useParams();

    const [dishDetails, setDishDetails] = useState(false)

    const [dish_id, setDishId] = useState();

    const [menu, setMenu] = useState();


    const dispatch = useDispatch()


    const isDetailLoading = useDetailLoading()

    const { fetchData: hotelfoods } = useQueryFetch("hotelfoods")

    const handleAddToCart = (data) => {
        dispatch(addToCart(data))
    }




    // useEffect(() => {


    //     if (expand.length <= cates.length) {

    //         setExpand([...expand, { id: expand.length + 1, bool: false }])

    //     }

    // })


    const [expand, setExpand] = useState([
        { bool: true },
        { bool: true },
        { bool: true },
        { bool: true },
        { bool: true },
        { bool: true },
        { bool: true },
    ]);


    console.log("Data", expand)

    const naviagte = useNavigate();


    const updateFieldChanged = index => e => {
        let newArr = [...expand];
        newArr[index] =
            { bool: !expand[index].bool };
        setExpand(newArr);
        console.log("index", index)
    }

    const cates = [
        {
            id: 1,
            category: "chicken",
        },
        {
            id: 2,
            category: "rice",
        },
        {
            id: 3,
            category: "breakfast",
        },
        {
            id: 4,
            category: "burger",
        },
        {
            id: 5,
            category: "fish",
        },
        {
            id: 6,
            category: "beef",
        },
        {
            id: 7,
            category: "mutton",
        }
    ]



    return (

        <div className='propluardish_foods'>


            <Header icon={true} onClick={() => props.setPopular(false)} title={hotel_name} />

            {menu && <OpacityBg onClick={() => setMenu(false)}>


                <Flex width="90%" margin="auto" flexDirection="column" justifyContent="start" backgroundColor="white">
                    {cates.map(cat =>
                        <H4 margin="10px">{cat.category}</H4>
                    )}

                </Flex>

            </OpacityBg>}


            <Flex justifyContent="space-between" alignItems="center"
                position="fixed" bottom="0" left="0" zIndex="100" onClick={() => setMenu(!menu)}>

                <Flex width="50px" height="50px" margin="10px"
                    borderRadius="100%" backgroundColor="black" justifyContent="center" alignItems="center">
                    <i style={{ color: "white", fontSize: "1.3rem" }} class={menu ? "fa-solid fa-xmark" : "fa-solid fa-book-open"}></i>
                </Flex>

                {!menu && <Flex onClick={() => naviagte("/cart")} width="fit-content" height="50px" margin="10px"
                    borderRadius="10px" padding="0 10px" backgroundColor="green" justifyContent="center" alignItems="center">
                    <i style={{ color: "white", fontSize: "1rem", margin: "0 5px" }} class="fa-solid fa-cart-shopping"></i>
                    <H4 color="white" margin="0 5px" fontWeight="bold">100</H4>
                </Flex>}

            </Flex>

            <div className='propluardish_foods_scroll'>


                {cates.map((cate, index) =>


                    <Flex flexDirection="column" backgroundColor="white" margin="20px 0">

                        <Flex onClick={updateFieldChanged(index)} >
                            <H4 margin="10px" fontWeight="bold">{cate.category}</H4>
                            <i style={{ transition: "0.5s", margin: "10px", transform: expand[index].bool === true ? "rotate(180deg)" : "rotate(0deg)" }} class="fa-solid fa-caret-down"></i>
                        </Flex>


                        {expand[index].bool === true &&
                            hotelfoods?.hotelFood.filter(fil => fil.category === cate.category && category === undefined ? fil.hotel_id === hotel_id : fil.hotel_id === hotel_id && fil.category === category).map(data =>

                                JSON.parse(data.price).filter((fil, index) => index === 0).map(dd =>

                                    <Flex boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px" width="96%" margin="auto"
                                        borderRadius="10px"
                                        borderBottom="0.1px solid rgb(180, 180, 180)" justifyContent="space-around" alignItems="start" >

                                        <Flex margin="20px 0" position="relative" justifyContent="center" alignItems="start">

                                            <img onClick={() => {
                                                setDishDetails(true)
                                                isDetailLoading(true);
                                                setDishId(data._id)
                                            }}

                                                style={{
                                                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                                                    borderRadius: "10px",
                                                    width: "130px",
                                                    height: "130px",
                                                    objectFit: "cover"
                                                }} src={data.image} className="card-img-top" alt="..." />

                                        </Flex>

                                        <Flex height="130px" margin="20px 0" flexDirection="column"
                                            justifyContent="space-between" alignItems="start">


                                            <Flex flexDirection="column" justifyContent="start" alignItems="start">

                                                <H4 fontWeight="bold" >{data.name}</H4>

                                                <Flex margin="10px 0" justifyContent="flex-start">

                                                    {dd.offer != dd.price && <H5 fontWeight="bold" margin="0 10px 0 0">₹ {dd.offer}</H5>}

                                                    <H5><del> ₹ {dd.price}</del></H5>

                                                </Flex>

                                                <H4 fontWeight="bold"
                                                    backgroundColor="orange" color="white" padding="0 10px">{dd.weight}</H4>


                                            </Flex>


                                            {cart.some(ca => ca.product_id === data._id) ?

                                                <Button width="130px"
                                                    color="remove"
                                                    onClick={() => {

                                                        setDishDetails(true)
                                                        isDetailLoading(true);
                                                        setDishId(data._id)

                                                    }}> Remove</Button>

                                                :

                                                <Button width="130px" color="tomato"

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

                                ))
                        }

                    </Flex>

                )}



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

            </div>

        </div >

    )
}
