import React from 'react'
import { useNavigate } from 'react-router-dom'
import { H3, H4 } from '../../Components/Text/Text'
import { Flex } from '../../Components/UI/Flex/Flex'
import { IconRound } from '../../Components/Icon/Icon'
import { Header } from '../../Components/Header/Header'
import "./Profile.css"
import { ResponsiveWrap } from "../../Components/UI/ResponsiveWrap/ResponsiveWrap"
import { decodeJwtToken } from '../../Utils/decode.jwt'
import { useQueryFetchId } from '../../Utils/useQueryFetch'

export const Profile = () => {

    const navigate = useNavigate()

    const user_id = decodeJwtToken();

    const { fetchData: loggedprofiles } = useQueryFetchId("user", user_id)


    const profile = loggedprofiles?.data?.user;


    console.log("loggedprofiles", loggedprofiles)


    const logout = () => {

        localStorage.removeItem("authToken")

        window.location.reload()

    }

    const list = [

        {
            id: 1,
            navigate: "/profile/edit",
            icon: "fa-solid fa-pen-to-square",
            icon_color: "orange",
            text: "Edit Profile",
        },
        {
            id: 2,
            navigate: "/orders",
            icon: "fa-solid fa-clock",
            icon_color: "purple",
            text: "Order History",
        },
        {
            id: 3,
            navigate: "/address",
            icon: "fa-solid fa-location-dot",
            icon_color: "green",
            text: "Address",
        },
        {
            id: 4,
            navigate: "/service",
            icon: "fa-solid fa-headset",
            icon_color: "red",
            text: "Customer Service",
        }

    ]


    return (

        <ResponsiveWrap>


            <Header title="my profile" />


            <Flex width="100%">

                <img style={{ margin: "10px", width: "100px", height: "100px", borderRadius: "100%" }}
                    src={require("../../Assets/Images/profile/profile.jpg")} />

                <Flex flexDirection="column" alignItems="flex-start">
                    <H3 margin="5px 10px">{profile?.user_name}</H3>
                    <H4 textTransform='lowercase' margin="5px 10px">{profile?.phone_number}</H4>

                </Flex>

            </Flex>


            {list.map(data =>

                < Flex width="fit-content" onClick={() => navigate(data.navigate)}>
                    <IconRound backgroundColor={data.icon_color} margin="10px"
                        icon={data.icon}></IconRound>

                    <H4 fontWeight="bold">{data.text}</H4>

                </Flex>

            )}

            <Flex width="fit-content" onClick={logout}>
                <IconRound backgroundColor="black" margin="10px" icon="fa-solid fa-right-from-bracket"></IconRound>

                <H4 fontWeight="bold">Log Out</H4>

            </Flex>

        </ResponsiveWrap >
    )
}
