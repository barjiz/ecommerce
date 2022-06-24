import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../Components/Button/Button'
import { Header } from '../../Components/Header/Header'
import { H3 } from '../../Components/Text/Text'
import { Flex } from '../../Components/UI/Flex/Flex'
import { ResponsiveWrap } from '../../Components/UI/ResponsiveWrap/ResponsiveWrap'
import { UserAddress } from '../Address/UserAddress'

export const ManageAddress = ({ nextPage, prevPage, setAddress }) => {

    const nextbtn = true;

    return (

        <ResponsiveWrap>

            <Header justifyContent="space-between">

                <i onClick={prevPage} class="fa-solid fa-chevron-left"></i>

                <H3 fontWeight="bold" >Address</H3>

                <i style={{ color: 'white' }} class="fa-solid fa-chevron-left"></i>


            </Header>

            <Header  title="my orders" />



            <UserAddress nextbtn={nextbtn} setAddress={setAddress} prevPage={prevPage} nextPage={nextPage} />


        </ResponsiveWrap>
    )
}
