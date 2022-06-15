import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../Components/Button/Button'
import { Header } from '../../Components/Header/Header'
import { H3 } from '../../Components/Text/Text'
import { Flex } from '../../Components/UI/Flex/Flex'
import { ResponsiveWrap } from '../../Components/UI/ResponsiveWrap/ResponsiveWrap'
import { UserAddress } from './UserAddress'

export const Address = ({ nextPage, prevPage, setAddress }) => {

    const navigate = useNavigate()


    return (

        <ResponsiveWrap>

            <Header justifyContent="space-between">

                <i onClick={() => navigate('/profile')} class="fa-solid fa-chevron-left"></i>

                <H3 fontWeight="bold" >Address</H3>

                <i style={{ color: 'white' }} class="fa-solid fa-chevron-left"></i>


            </Header>


            <UserAddress setAddress={setAddress} />


            <Button color="dark" onClick={() => navigate('/profile')} margin="10px auto">Back</Button>




        </ResponsiveWrap>
    )
}
