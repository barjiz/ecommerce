import React, { useState } from 'react'
import { Flex } from '../../Components/UI/Flex/Flex'
import { category } from '../../LocalData/Category'
import { Products } from '../Products/Products'
import { H3, H4, H5, H6 } from '../../Components/Text/Text'
import { SearchBar } from '../../Components/SearchBar/SearchBar'
import { useNavigate } from 'react-router-dom'
import { Navigator } from '../../Components/Route/Router'
import { Grid } from '../../Components/UI/Grid/Grid'
import { SwiperSlide } from 'swiper/react'
import { SwiperCarousel } from '../../Components/Slider/SwiperCarousel/SwiperCarousel'
import { Button } from '../../Components/Button/Button'
import { OpacityBg } from '../../Components/UI/OpacityBg/OpacityBg'
import { DishesDetails } from '../Dishes/DishesDetails'
import { useDetailLoading } from '../../Utils/useLoading'


export const Grocery = () => {


    const isDetailLoading = useDetailLoading()


    const navigate = useNavigate()

    const [menuBar, setMenuBar] = useState(false)

    const [tabs, setTabs] = useState()

    const [dishDetails, setDishDetails] = useState(false)

    const [dish_id, setDishId] = useState();


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

                        <Flex width="90%" justifyContent="center">

                            <img width="100%" height={window.innerWidth <= 460 ? "180px" : "320px"}

                                style={{ cursor: "pointer", borderRadius: "30px" }} src={require(`../../Assets/Images/product_banner/${data.image}`)} alt="" />

                        </Flex>

                    </SwiperSlide>

                ))}


            </SwiperCarousel>


            <H3 margin="20px 10px">Shop By Categories</H3>


            <Grid>

                {category.map(data =>

                    <div className='col-4 col-sm-3 col-md-3 col-lg-3 col-xl-2  col-xxl-2'>
                        <Navigator route={`/categories/${data.category}`}>
                            <img width="100%" className="cate-img" src={require(`../../Assets/Images/product_banner/${data.image}`)} alt="" />

                            <H6 fontWeight="bold" margin="10px 0">{data.product_name}</H6>

                        </Navigator>

                    </div>

                )}

            </Grid>


            {
                category.map(cate => (

                    <div className='category' key={cate.category}>

                        <Flex width="100%" justifyContent="center">

                            <img width="90%" height={window.innerWidth <= 460 ? "180px" : "320px"} onClick={() => navigate(`/categories/${cate.category}`)}
                                style={{ cursor: "pointer", borderRadius: "30px" }} src={require(`../../Assets/Images/product_banner/${cate.banner_wide}`)} alt="" />
                        </Flex>

                        <Flex>

                            <H4 fontWeight="bold" margin="10px">{cate.product_name}</H4>

                            <H5 color="tomato" fontWeight="bold" margin="10px" onClick={() => navigate(`/categories/${cate.category}`)}>Load More</H5>

                        </Flex>


                        <Flex overflowX="scroll" >

                            <Products
                                // width="120px" 
                                setDishId={setDishId}
                                setDishDetails={setDishDetails}
                                width={window.innerWidth <= 460 ? "130px" : "160px"}
                                height="180px"
                                category={cate.category} flexDirection="column" />

                        </Flex>

                    </div >

                ))
            }



            {dishDetails &&

                <>

                    <OpacityBg onClick={() => {
                        setDishDetails(false)
                        isDetailLoading(false)
                    }} />

                    <DishesDetails cartColor="green" setDishDetails={setDishDetails} dish_id={dish_id} />

                </>

            }


        </div>
    )
}
