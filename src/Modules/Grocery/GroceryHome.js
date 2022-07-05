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
import { useDetailLoading } from '../../Utils/useLoading'
import { Grocery } from './Grocery'


export const GroceryHome = () => {

    const isDetailLoading = useDetailLoading()

    const navigate = useNavigate()

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
            image: "vegitablesbanner.jpg",

        },
        {
            image: "bakerycakebanner.jpg",

        },
        {
            image: "foodgrainsoilbanner.jpg",

        }
    ]


    return (
        <div>


            <SearchBar margin="10px" placeholder="search for products" />


            <SwiperCarousel>


                {banner.map(data => (

                    <SwiperSlide>

                        <Flex width="98%" justifyContent="center">

                            <img width="100%" height={window.innerWidth <= 460 ? "200px" : "400px"}

                                style={{ cursor: "pointer", borderRadius: "10px" }} src={require(`../../Assets/Images/product_banner/${data.image}`)} alt="" />

                        </Flex>

                    </SwiperSlide>

                ))}


            </SwiperCarousel>


            <H3 margin="20px 10px">Shop By Categories</H3>


            <Grid>

                {category.map(data =>

                    <div className='col-4 col-sm-3 col-md-3 col-lg-3 col-xl-2  col-xxl-2'>
                        <Navigator route={`/categories/${data.category}`}>
                            <img width="90%" className="cate-img" src={require(`../../Assets/Images/product_banner/${data.image}`)} alt="" />

                            <H6 fontWeight="bold" margin="10px 0">{data.product_name}</H6>

                        </Navigator>

                    </div>

                )}

            </Grid>


            {
                category.map(cate => (

                    <div key={cate.category}>

                        <Flex width="100%" justifyContent="center">

                            <img width="98%" height={window.innerWidth <= 460 ? "200px" : "400px"} onClick={() => navigate(`/categories/${cate.category}`)}
                                style={{ cursor: "pointer", borderRadius: "10px" }} src={require(`../../Assets/Images/product_banner/${cate.banner_wide}`)} alt="" />
                        </Flex>

                        <Flex>

                            <H4 fontWeight="bold" margin="10px">{cate.product_name}</H4>

                            <H5 color="tomato" fontWeight="bold" margin="10px" onClick={() => navigate(`/categories/${cate.category}`)}>Load More</H5>

                        </Flex>


                        <Flex overflowX="scroll" >

                            <Grocery
                                margin="5px"
                                width={window.innerWidth <= 460 ? "130px" : "160px"}
                                height="180px"
                                category={cate.category} flexDirection="column" />

                        </Flex>

                    </div >

                ))
            }

        </div>
    )
}
