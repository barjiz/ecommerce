import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, DangerBtn, PrimaryBtn, SecondaryBtn, WhiteBtn, } from '../../Components/Button/Button'

import { H3, H4, H5, H6 } from '../../Components/Text/Text'
import { Flex } from '../../Components/UI/Flex/Flex'

import { fetchProfile, fetchUserData } from './Method'

import "./EditProfile.css"


import jwt_decode from "jwt-decode";
import { DropDown, Text } from '../../Components/Input/Input'
import axios from 'axios'
import { BASE_URL } from '../../url'
import { Header } from '../../Components/Header/Header'
import { useQuery } from 'react-query'


export const EditProfile = () => {


    var token = localStorage.getItem("authToken");
    var decoded = jwt_decode(token);


    const navigate = useNavigate()


    const [user_name, setUserName] = useState()

    const [email, setEmail] = useState()

    const [phone_number, setPhoneNumber] = useState()

    const [gender, setGender] = useState()

    const [dob, setDob] = useState()


    const { data: loggedprofiles } = useQuery(['loggedprofiles', decoded.id], () => fetchProfile(decoded.id), {

        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })



    const profile = loggedprofiles?.data?.user


    const onSubmit = () => {

        axios.patch(`${BASE_URL}user/${decoded.id}`, {
            user_name,
            email,
            phone_number,
            gender,
            dob
        }).then(() => navigate('/profile'))

    }


    return (

        <div className='edit_profile'>



            <Header justifyContent="space-between">

                <i onClick={() => navigate('/')} class="fa-solid fa-chevron-left"></i>

                <H3 fontWeight="bold" >Edit Profile</H3>

                <i style={{ color: 'transparent' }} class="fa-solid fa-chevron-left"></i>


            </Header>

            <Flex width="90%" margin="0 auto" flexDirection="column" justifyContent="flex-start">


                <img style={{ margin: "10px", width: "100px", height: "100px", borderRadius: "100%" }}
                    src={require("../../Assets/Images/profile/profile.jpg")} />



                <Text onChange={(e) => setUserName(e.target.value)}
                    defaultValue={profile?.user_name} placeholder="user name"></Text>

                <Text type="email" onChange={(e) => setEmail(e.target.value)}
                    defaultValue={profile?.email} placeholder="email"></Text>

                <Text type="number" onChange={(e) => setPhoneNumber(e.target.value)}
                    defaultValue={profile?.phone_number} placeholder="phone number"></Text>


                <DropDown defaultValue={profile?.gender} onChange={(e) => setGender(e.target.value)}>

                    <option selected="true" disabled="disabled">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>

                </DropDown>

                <Text type="date" onChange={(e) => setDob(e.target.value)} defaultValue={profile?.dob} placeholder="date of birth"></Text>

                <Flex width="100%">

                    <Button color="danger" width="100%" margin="0 20px 0 0" onClick={onSubmit}>Update</Button>

                    <Button color="white" width="50%" onClick={() => navigate('/profile')}>Cancel</Button>

                </Flex>


            </Flex>


        </div >
    )
}
