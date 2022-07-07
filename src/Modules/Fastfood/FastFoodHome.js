import React, { useState } from 'react'
import { Flex } from '../../Components/UI/Flex/Flex'
import { H4 } from '../../Components/Text/Text'
import { SearchBar } from '../../Components/SearchBar/SearchBar'
import { SwiperSlide } from 'swiper/react'
import { SwiperCarousel } from '../../Components/Slider/SwiperCarousel/SwiperCarousel'
import { Hotel } from '../Hotel/Hotel'
import { fastfoodCategory } from '../../LocalData/Category'
import { useNavigate } from 'react-router-dom'
import { Grid } from '../../Components/UI/Grid/Grid'
import { Button } from '../../Components/Button/Button'


export const FastFoodHome = () => {

    const [menuBar, setMenuBar] = useState(false)

    const [more, setMore] = useState(4)

    const navigate = useNavigate();

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


            <SearchBar color="tomato" margin="10px" placeholder="Restaurant name or a dish" />


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



            <Flex>

                <H4 fontWeight="bold" margin="10px">Eats what make's you happy</H4>

            </Flex>


            <Grid>

                {fastfoodCategory.slice(0, more).map(data =>

                    <div className="col-3 col-sm-4 col-md-3 col-lg-3 col-xl-2  col-xxl-2">

                        <Flex margin="10px 0" flexDirection="column" justifyContent="center" alignItems="center">

                            <img onClick={() => navigate(`${data.category}`)

                            } style={{
                                boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px", borderRadius: "100%",
                                width: "100%",
                                height: "73px",
                                objectFit: "cover"
                            }} src={data.image} class="card-img-top" alt="..." />

                            <H4 maxHeight="1.3rem" fontWeight="bolder" margin="10px 5px">{data.category}</H4>

                        </Flex>

                    </div>


                )}

            </Grid>


            <Button onClick={() => more === 7 ? setMore(4) : setMore(7)}
                margin="auto" borderRadius="10px" padding="5px" width="96%" color="white">
                {more === 7 ? "see less" : "see more"}
            </Button>



            <H4 fontWeight="bold" margin="15px">Popular Dish</H4>

            <Flex overflowX="scroll" >

                {fastfoodCategory.map(data =>

                    <Flex flexDirection="column" margin="10px">

                        <img onClick={() => navigate(`${data.category}`)

                        } style={{
                            boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px", borderRadius: "30px",
                            width: "130px",
                            height: "130px",
                            objectFit: "cover"
                        }} src={data.image} class="card-img-top" alt="..." />

                        <H4 maxWidth="130px" maxHeight="1.3rem" fontWeight="bolder" margin="10px 5px">{data.category}</H4>

                    </Flex>

                )}

            </Flex>


            <Hotel />

        </div >
    )
}
