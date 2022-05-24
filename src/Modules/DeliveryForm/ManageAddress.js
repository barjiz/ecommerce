import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../Components/Button/Button'
import { Header } from '../../Components/Header/Header'
import { H3 } from '../../Components/Text/Text'
import { Flex } from '../../Components/UI/Flex/Flex'
import { UserAddress } from '../Address/UserAddress'

export const ManageAddress = ({ nextPage, prevPage, setAddress }) => {


    return (

        <div>

            <Header justifyContent="space-between">

                <i onClick={prevPage} class="fa-solid fa-chevron-left"></i>

                <H3 fontWeight="bold" >Address</H3>

                <i style={{ color: 'white' }} class="fa-solid fa-chevron-left"></i>


            </Header>


            <UserAddress setAddress={setAddress} />


            <Flex position="fixed" bottom="0" padding="60px 0">

                <Button color="white" onClick={prevPage} width="50%" margin="10px">Back</Button>

                <Button color="blue" onClick={nextPage} width="100%" margin="10px" >Next</Button>

            </Flex>


        </div>
    )
}
