import React, { useState } from 'react'
import { Flex } from '../../Components/UI/Flex/Flex'
import { category } from '../../LocalData/Category'
import { H3, H4, H5, H6 } from '../../Components/Text/Text'
import { SearchBar } from '../../Components/SearchBar/SearchBar'
import { useNavigate } from 'react-router-dom'
import { Navigator } from '../../Components/Route/Router'
import { Grid } from '../../Components/UI/Grid/Grid'
import { SwiperSlide } from 'swiper/react'
import { SwiperCarousel } from '../../Components/Slider/SwiperCarousel/SwiperCarousel'
import { Dishes } from '../Dishes/Dishes'
import { dishescategories } from '../../LocalData/dishescategories'
import { DishesDetails } from '../Dishes/DishesDetails'
import { OpacityBg } from '../../Components/UI/OpacityBg/OpacityBg'
import { useDetailLoading } from '../../Utils/useLoading'


export const Fastfood = () => {


    const isDetailLoading = useDetailLoading()

    const [menuBar, setMenuBar] = useState(false)

    const [dishDetails, setDishDetails] = useState(false)

    const [dish_id, setDishId] = useState();

    console.log('dishDetails', dishDetails)
    console.log('dish_id', dish_id)

    const style = {
        left: "-260px"
    }

    if (menuBar) {
        style.left = "0"
    }
    else {
        style.left = "-100%"
    }


    const banner = [
        {
            image: "food_1.jpg",

        },
        {
            image: "food_2.jpg",

        },
        {
            image: "food_3.jpg",

        }
    ]


    return (
        <div>



            <SearchBar margin="10px" placeholder="search for foods" />


            <SwiperCarousel>


                {banner.map(data => (

                    <SwiperSlide>

                        <Flex width="90%" justifyContent="center">

                            <img width="100%" height={window.innerWidth <= 460 ? "180px" : "320px"}

                                style={{ cursor: "pointer", borderRadius: "30px" }}
                                src={require(`../../Assets/Images/food/${data.image}`)} alt="" />

                        </Flex>

                    </SwiperSlide>

                ))}


            </SwiperCarousel>


            <Grid>

                {dishescategories.map(data =>

                    <div className='col-4 col-sm-3 col-md-3 col-lg-3 col-xl-2  col-xxl-2'>

                        <Flex margin="10px 0" backgroundColor="#FAD7A0" borderRadius="10px"
                            alignItems="center" flexDirection="column"
                            onClick={() => {
                                setDishDetails(true)

                            }
                            }>

                            <i style={{ fontSize: "1.7rem", margin: "10px 0" }} class={data.icon}></i>

                            <H6 fontWeight="bold" margin="10px 0">{data.product_name}</H6>

                        </Flex>

                    </div>

                )}

            </Grid>



            <div className='category'>

                <Flex>

                    <H4 fontWeight="bold" margin="10px">Popular Dish</H4>

                </Flex>


                <Flex overflowX="scroll" >

                    <Dishes setDishDetails={setDishDetails} setDishId={setDishId}
                        // width="120px"
                        width={window.innerWidth <= 460 ? "130px" : "160px"}
                        height="180px"

                        category="3" flexDirection="column" />

                </Flex>

                <Flex overflowX="scroll" flexDirection="column"
                    justifyContent="start" alignItems="start">

                    <Dishes setDishDetails={setDishDetails} setDishId={setDishId}
                        // width="120px"
                        width={window.innerWidth <= 460 ? "130px" : "160px"}
                        height="180px"

                        category="3" flexDirection="row" />

                </Flex>

            </div >


            {dishDetails &&

                <>

                    <OpacityBg onClick={() => {
                        setDishDetails(false)
                        isDetailLoading(false)
                    }} />

                    <DishesDetails cartColor="dark" setDishDetails={setDishDetails} dish_id={dish_id} />

                </>

            }



        </div >
    )
}
