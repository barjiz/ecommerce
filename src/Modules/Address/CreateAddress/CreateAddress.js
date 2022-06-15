import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { DropDown, Text } from '../../../Components/Input/Input';
import { Flex } from '../../../Components/UI/Flex/Flex';
import { H3 } from "../../../Components/Text/Text"

import './CreateAddress.css'
import axios from 'axios';


import jwt_decode from "jwt-decode";
import { BASE_URL } from '../../../url';

import { ResponsiveWrap } from "../../../Components/UI/ResponsiveWrap/ResponsiveWrap"

import { v4 as uuidv4 } from 'uuid';
import { Button } from '../../../Components/Button/Button';
import { OpacityBg } from '../../../Components/UI/OpacityBg/OpacityBg';

export const CreateAddress = ({ setAddAddress, refetch }) => {


    var token = localStorage.getItem("authToken");
    var decoded = jwt_decode(token);

    let myuuid = uuidv4();


    useEffect(() => {



    })


    const onSubmit = () => {

        axios.patch(`${BASE_URL}user/${decoded.id}`, {
            address: address

        }).then(() => {
            setAddAddress(false)
            refetch()
        })
    }



    const input = [
        {
            id: 1,
            name: "full_name",
            placeholder: "Full Name",
            type: "text",
        },
        {
            id: 2,
            name: "phone_number",
            placeholder: "Phone Number",
            type: "number",
        },
        {
            id: 3,
            name: "place",
            placeholder: "Place",
            type: "text",
        },
        {
            id: 4,
            name: "pincode",
            placeholder: "Pincode",
            type: "number",
        }
    ]


    const initialvalue = [
        {
            full_name: "",
            phone_number: "",
            pincode: "",
            place: "",
        },
    ]


    const [address, setInputField] = useState(initialvalue)


    const handleChangeInput = (index, event) => {
        const values = [...address]
        values[index][event.target.name] = event.target.value
        setInputField(values)
    }



    return (


        <OpacityBg>

            <div className='create_address'>


                <H3 margin="30px">Add Shipping Address</H3>




                {address.map((inputField, index) => (

                    <>

                        {input.map(data => (

                            <Text name={data.name} type={data.type}
                                width="100%" placeholder={data.placeholder}
                                onChange={event => handleChangeInput(index, event)} />

                        ))}

                    </>

                ))}






                <Flex>

                    <Button color="danger" onClick={onSubmit} width="100%" margin="20px 20px 0 0" >Add Address</Button>


                    <Button color="white" margin="20px 0 0 0" onClick={() => setAddAddress(false)} width="50%">Cancel</Button>


                </Flex>

            </div>

        </OpacityBg >

    );
};
