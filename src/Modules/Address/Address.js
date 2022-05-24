import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../Components/Button/Button'
import { Header } from '../../Components/Header/Header'
import { H3 } from '../../Components/Text/Text'
import { Flex } from '../../Components/UI/Flex/Flex'
import { UserAddress } from './UserAddress'

export const Address = ({ nextPage, prevPage, setAddress }) => {

    const navigate = useNavigate()


    return (

        <div>

            <Header justifyContent="space-between">

                <i onClick={() => navigate('/profile')} class="fa-solid fa-chevron-left"></i>

                <H3 fontWeight="bold" >Address</H3>

                <i style={{ color: 'white' }} class="fa-solid fa-chevron-left"></i>


            </Header>


            <UserAddress setAddress={setAddress} />


            <Flex position="fixed" bottom="70px">

                <Button color="dark" onClick={() => navigate('/profile')} width="100%" margin="10px">Back</Button>

            </Flex>


        </div>
    )
}
