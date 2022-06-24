import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../Components/Button/Button'
import { Header } from '../../Components/Header/Header'
import { H3 } from '../../Components/Text/Text'
import { Flex } from '../../Components/UI/Flex/Flex'
import { ResponsiveWrap } from '../../Components/UI/ResponsiveWrap/ResponsiveWrap'
import { UserAddress } from './UserAddress'

export const Address = ({ nextPage, prevPage }) => {

    const navigate = useNavigate()

    const nextbtn = false;

    const [address, setAddress] = useState();

    return (

        <ResponsiveWrap>



            <Header icon={true} navigate="profile" title="Saved Address" />


            <UserAddress nextbtn={nextbtn} setAddress={setAddress} />


            <Button color="dark" onClick={() => navigate('/profile')} margin="10px auto">Back</Button>

        </ResponsiveWrap>
    )
}
