import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../Components/Button/Button'
import { Header } from '../../Components/Header/Header'

import { Password, Text } from '../../Components/Input/Input'
import { H2, H3, H5 } from '../../Components/Text/Text'
import { Flex } from '../../Components/UI/Flex/Flex'
import { BASE_URL } from '../../url'
import * as yup from 'yup';

import "./Auth.css"

export const OtpVerify = (props) => {

    const navigate = useNavigate()

    const { phone_number, hash, otp, setOtp, nextPage, backPage } = props

    const ConfrimOtp = () => {

        axios.post("https://emart-one-touch.herokuapp.com/verifyotp", {

            phone: '+91' + phone_number,
            hash: hash,
            otp: otp

        }).then((res) => {
            console.log(res)

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

                <H2 color="#7B68EE" margin="20px 0">Enter Otp</H2>

                <H3>OTP sent to {props.phone_number}</H3>

                <Text
                    placeholder="Enter your Otp"
                    id="name"
                    type="number"
                    onChange={(e) => setOtp(e.target.value)} />

                <Flex>

                    <Button color="white" width="100%" onClick={backPage} margin="30px 0 30px 0">Back</Button>

                    <Button color="primary" width="100%" onClick={ConfrimOtp} margin="30px 0 30px 20px">Confirm Otp</Button>

                </Flex>


                <Flex width="100%" justifyContent="center">

                    <H5 textTransform="inherit">Back to</H5>

                    <H5 fontWeight="bold" cursor="pointer" margin="0 7px" color="#7B68EE" onClick={() => navigate('/login')}> Login</H5>

                </Flex>


            </div >

        </div >

    )
}
