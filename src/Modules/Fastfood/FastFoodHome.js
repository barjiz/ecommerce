import React, { useState } from 'react'
import { Flex } from '../../Components/UI/Flex/Flex'
import { H4, H6 } from '../../Components/Text/Text'
import { SearchBar } from '../../Components/SearchBar/SearchBar'
import { Grid } from '../../Components/UI/Grid/Grid'
import { SwiperSlide } from 'swiper/react'
import { SwiperCarousel } from '../../Components/Slider/SwiperCarousel/SwiperCarousel'
import { Fastfood } from './Fastfood'
import { dishescategories } from '../../LocalData/dishescategories'
import { Hotel } from '../Hotel/Hotel'


export const FastFoodHome = () => {

    const [menuBar, setMenuBar] = useState(false)

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
                            alignItems="center" flexDirection="column">

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

                    <Fastfood
                        width={window.innerWidth <= 460 ? "130px" : "160px"}
                        height="180px"
                        category="3" flexDirection="column" />

                </Flex>

            </div >

            <Hotel />

        </div >
    )
}
