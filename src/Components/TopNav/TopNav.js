import { useState } from 'react'

import { useLocation, useNavigate } from "react-router-dom";

import './TopNav.css'

export const TopNav = () => {

    let navigate = useNavigate()

    const location = useLocation()


    var pathname = window.location.pathname;
    var appId = pathname.split('/')[2];


    const navigation = [

        {
            id: 2,
            icon: "fa-solid fa-list",
            url: '/categories',
            url2: `/categories/${appId}`
        },

        {
            id: 1,
            icon: "fa-solid fa-house",
            url: '/'
        },

        {
            id: 3,
            icon: "fa-solid fa-cart-shopping",
            url: '/cart'

        },
        {
            id: 4,
            icon: "fa-solid fa-clock",
            url: '/orders',
            url2: `/orders/${appId}`
        },
        {
            id: 5,
            icon: "fa-solid fa-user",
            url: '/profile',
            url2: '/profile/edit',
            url3: '/address'
        },

    ]

    return (
        <div className='top-nav'>


            {navigation.map(data =>

                <div className='btn-tab' key={data.id}>
                    {location.pathname === data.url || location.pathname === data.url2 || location.pathname === data.url3 ?
                        <div className="icon-active" onClick={() => navigate(data.url)}>
                            <i class={data.icon}></i>
                        </div>
                        :
                        <div className="icon-not-active" onClick={() => navigate(data.url)}>
                            <i class={data.icon}></i>
                        </div>
                    }
                </div>
            )}
        </div>
    )
}




















