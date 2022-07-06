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
import { PoplularDish } from './PoplularDish'
import { fastfoodCategory } from '../../LocalData/Category'


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

                        <Flex width="96%" justifyContent="center">

                            <img width="100%" height={window.innerWidth <= 460 ? "180px" : "400px"}

                                style={{ cursor: "pointer", borderRadius: "15px" }}
                                src={require(`../../Assets/Images/food/${data.image}`)} alt="" />

                        </Flex>

                    </SwiperSlide>

                ))}


            </SwiperCarousel>


            <div>

                <Flex>

                    <H4 fontWeight="bold" margin="10px">Popular Dish</H4>

                </Flex>


                <Flex overflowX="scroll" >

                    {fastfoodCategory.map(data =>

                        <PoplularDish
                            category={data.category}
                            width={window.innerWidth <= 460 ? "130px" : "160px"}
                            height="10px"
                            flexDirection="column" />

                    )}

                </Flex>

            </div >

            <Hotel />

        </div >
    )
}
