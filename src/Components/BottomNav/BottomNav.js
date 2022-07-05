import { useState } from 'react'

import { useLocation, useNavigate } from "react-router-dom";

import './BottomNav.css'

import { H4, H5, H6 } from "../Text/Text"
import { Flex } from '../UI/Flex/Flex';
import { useSelector } from 'react-redux';


export const BottomNav = () => {

    let navigate = useNavigate()

    const location = useLocation()


    var pathname = window.location.pathname;
    var appId = pathname.split('/')[1];

    const cart = useSelector((state) => state.cart.cartItems)


    const navigation = [

        {
            id: 1,
            title: "Home",
            icon: "fa-solid fa-house",
            url: '/'
        },
        // {
        //     id: 2,
        //     icon: "fa-solid fa-list",
        //     url: '/categories',
        //     url2: `/categories/${appId}`
        // },
        {
            id: 3,
            title: "Cart",
            icon: "fa-solid fa-cart-shopping",
            url: '/cart'

        },
        {
            id: 4,
            title: "Orders",
            icon: "fa-solid fa-clock",
            url: '/orders',
            url2: `/orders/${appId}`
        },
        {
            id: 5,
            title: "Profile",
            icon: "fa-solid fa-user",
            url: '/profile',
            url2: '/profile/edit',
            url3: '/address'
        },

    ]

    return (
        <div className='bottom-nav'>


            {navigation.map(data =>

                <div className='btn-tab' key={data.id}>
                    {location.pathname === data.url || location.pathname === data.url2 || location.pathname === data.url3 ?
                        <div className="icon-active" onClick={() => navigate(data.url)}>
                            <i class={data.icon}></i>
                            <h6>{data.title}</h6>
                        </div>
                        :
                        <div className="icon-not-active" onClick={() => navigate(data.url)}>
                            <i class={data.icon}></i>
                            <h6>{data.title}</h6>
                        </div>
                    }

                    {data.title === "Cart" &&
                        <Flex backgroundColor="Red" width="20px" height="20px"
                            justifyContent="center" alignItems="center"
                            borderRadius="100%" position="absolute" top="0" right="25px" >
                            <H6 color="white">{cart.length}</H6>
                        </Flex>}


                </div>
            )}



        </div>
    )
}




















