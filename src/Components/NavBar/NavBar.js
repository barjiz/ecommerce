import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { category } from '../../LocalData/Category'
import { Button } from '../Button/Button'
import { Navigator } from '../Route/Router'
import { SearchBar } from '../SearchBar/SearchBar'
import { H5, H7 } from '../Text/Text'

import "./NavBar.css"

export const NavBar = () => {


    const navigate = useNavigate()

    const [menuBar, setMenuBar] = useState(false)

    const showAuth = useSelector((state) => state.auth.authState)


    const style = {
        left: "-260px"
    }

    if (menuBar) {
        style.left = "0"
    }
    else {
        style.left = "-100%"
    }

    return (
        <div className='nav'>

            <div className='home_header'>

                <img style={{ cursor: "pointer" }} onClick={() => navigate("/")} width="80px" src={require("../../Assets/Images/logo/logo.png")} />

                <SearchBar />

                <H5 cursor="pointer" onClick={() => navigate("/address")} fontWeight="bold">Slect your Address</H5>

                <H5 cursor="pointer" onClick={() => navigate("/orders")} fontWeight="bold">Orders</H5>


                {localStorage?.getItem("authToken") !== null ?

                    <i onClick={() => navigate("/profile")} class="fa-solid fa-user"></i>
                    :
                    <Button onClick={() => navigate("/login")} color="primary" width="fit-content">Login</Button>

                }



                <i onClick={() => navigate("/cart")} class="fa-solid fa-cart-shopping"></i>


            </div>

            <div className='category_header' >

                <i style={{ color: "white" }} onClick={() => setMenuBar(!menuBar)} class="fa-solid fa-list"></i>


                <Navigator route={`/`}>

                    <H7 color="white" fontWeight="bold" margin="10px">All</H7>

                </Navigator>

                {category.map(data =>


                    <Navigator route={`/categories/${data.category}`}>

                        <H7 color="white" fontWeight="bold" margin="10px">{data.product_name}</H7>

                    </Navigator>

                )}

                <div style={style} className='menubar'>

                    <div className='menubar_holder'>

                        {category.map(data =>


                            <Navigator route={`/categories/${data.category}`}>

                                <H5 onClick={() => setMenuBar(false)} color="white" fontWeight="bold" margin="20px">{data.product_name}</H5>

                            </Navigator>


                        )}


                    </div>

                    <i style={{ fontSize: "3rem", color: "white", margin: "10px" }} onClick={() => setMenuBar(false)} class="fa-solid fa-close"></i>



                </div>


            </div>



        </div>
    )
}
