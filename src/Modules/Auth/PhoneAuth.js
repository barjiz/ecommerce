import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../Components/Button/Button'
import { Header } from '../../Components/Header/Header'

import { Password, Text } from '../../Components/Input/Input'
import { H2, H5 } from '../../Components/Text/Text'
import { Flex } from '../../Components/UI/Flex/Flex'
import { BASE_URL } from '../../url'
import * as yup from 'yup';

import "./Auth.css"

export const PhoneAuth = (props) => {

    const { phone_number, setPhoneNumber, setHash, nextPage } = props


    const navigate = useNavigate()

    const SentOtp = () => {

        axios.post("https://emart-one-touch.herokuapp.com/sendotp", {

            phone: '+91' + phone_number

        }).then((res) => {
            console.log(res)
            setHash(res.data.hash)
            nextPage();

        })
    }



    return (

        <div className='auth'>

            <div className='auth_container'>

                <Header position="fixed">

                    <i onClick={() => navigate('/login')} class="fa-solid fa-close"></i>

                </Header>


                <i onClick={() => navigate('/')} class="fa-solid fa-close close_auth"></i>

                <H2 color="#7B68EE" margin="20px 0">Phone Number</H2>

                <Text
                    placeholder="Enter your Phone"
                    id="name"
                    type="number"
                    onChange={(e) => setPhoneNumber(e.target.value)} />


                <Button color="primary" width="100%" onClick={SentOtp} margin="30px 0">Sent Otp</Button>

                <Flex width="100%" justifyContent="center">

                    <H5 textTransform="inherit">Back to</H5>

                    <H5 fontWeight="bold" cursor="pointer" margin="0 7px" color="#7B68EE" onClick={() => navigate('/login')}> Login</H5>

                </Flex>


            </div >

        </div >

    )
}
