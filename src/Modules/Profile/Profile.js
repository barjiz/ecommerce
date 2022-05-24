import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../Components/Button/Button'

import { H3, H4 } from '../../Components/Text/Text'
import { Flex } from '../../Components/UI/Flex/Flex'

import { fetchProfile } from './Method'

import { Icon, IconRound } from '../../Components/Icon/Icon'

import { Header } from '../../Components/Header/Header'

import "./Profile.css"


import jwt_decode from "jwt-decode";
import { useQuery } from 'react-query'


export const Profile = () => {


    var token = localStorage.getItem("authToken");
    var decoded = jwt_decode(token);


    const navigate = useNavigate()


    const id = "626db0930ca36f7401cd608d"


    const { data: loggedprofiles } = useQuery(['loggedprofiles', decoded.id], () => fetchProfile(decoded.id), {

        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })



    const profile = loggedprofiles?.data?.user;

    const logout = () => {


        localStorage.removeItem("authToken")

        window.location.reload()

    }


    return (

        <div className='profile'>


            <Header justifyContent="space-between">

                <i onClick={() => navigate('/')} class="fa-solid fa-chevron-left"></i>

                <H3 fontWeight="bold" >My Profile</H3>

                <i style={{ color: 'white' }} class="fa-solid fa-chevron-left"></i>


            </Header>


            <Flex width="100%">

                <img style={{ margin: "10px", width: "100px", height: "100px", borderRadius: "100%" }}
                    src={require("../../Assets/Images/profile/profile.jpg")} />



                <Flex justifyContent="flex-start" alignItems="flex-start">

                    <Flex flexDirection="column" alignItems="flex-start">
                        <H3 margin="5px 10px">{profile?.user_name}</H3>
                        <H4 textTransform='lowercase' margin="5px 10px">{profile?.email}</H4>
                    </Flex>

                    <Icon color="grey" onClick={() => navigate('/profile/edit')} margin="10px" icon="fa-solid fa-pen-to-square"></Icon>

                </Flex>


            </Flex>



            {/* {profile?.phone_number ? <H4 margin="10px">{profile?.phone_number}</H4> : null}

            {profile?.gender ? <H4 margin="10px">{profile?.gender}</H4> : null}

            {profile?.dob ? <H4 margin="10px">{profile?.dob}</H4> : null}
 */}

            <Flex width="fit-content" onClick={() => navigate('/orders')}>
                <IconRound backgroundColor="tomato" margin="10px" icon="fa-solid fa-clock"></IconRound>

                <H4 fontWeight="bold">Order History</H4>

            </Flex>

            <Flex width="fit-content" onClick={() => navigate('/address')}>
                <IconRound backgroundColor="green" margin="10px" icon="fa-solid fa-location-dot"></IconRound>

                <H4 fontWeight="bold">Address</H4>

            </Flex>

            <Button color="dark" width="95%" margin="10px auto" onClick={logout} fontWeight="bold">Log Out</Button>


        </div >
    )
}
