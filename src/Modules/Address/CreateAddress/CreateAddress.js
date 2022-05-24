import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { DropDown, Text } from '../../../Components/Input/Input';
import { Flex } from '../../../Components/UI/Flex/Flex';
import { H3 } from "../../../Components/Text/Text"

import './CreateAddress.css'
import axios from 'axios';


import jwt_decode from "jwt-decode";
import { BASE_URL } from '../../../url';



import { v4 as uuidv4 } from 'uuid';
import { Button } from '../../../Components/Button/Button';

export const CreateAddress = ({ setAddAddress, refetch }) => {

    const { id } = useParams()


    const navigate = useNavigate()

    var token = localStorage.getItem("authToken");
    var decoded = jwt_decode(token);

    let myuuid = uuidv4();


    const [full_name, setFullName] = useState();

    const [phone_number, setPhoneNumber] = useState();

    const [pincode, setPinCode] = useState();

    const [place, setPlace] = useState();

    const [address, setAddress] = useState([])


    useEffect(() => {



    })


    const onSubmit = () => {

        // setAddress([...address, {
        //     _id: myuuid,
        //     full_name: full_name,
        //     phone_number: phone_number,
        //     pincode: pincode,
        //     place: place,
        // }])


        axios.patch(`${BASE_URL}user/${decoded.id}`, {
            address: {
                _id: myuuid,
                full_name: full_name,
                phone_number: phone_number,
                pincode: pincode,
                place: place,
            }
        }).then(() => {
            setAddAddress(false)
            refetch()
        })




    }



    return (

        <div className='add_address'>

            <div className='address_holder'>

                <H3 margin="30px">Add Shipping Address</H3>

                < Text onChange={(e) => setFullName(e.target.value)} width="100%" placeholder="full name" />

                < Text type="number" onChange={(e) => setPhoneNumber(e.target.value)} width="100%" placeholder="phone number" />

                <DropDown onChange={(e) => setPinCode(e.target.value)} width="100%">

                    <option selected="true" disabled>Pincode</option>

                    <option value="67312">67312</option>
                    <option value="67312">67312</option>
                    <option value="67312">67312</option>
                    <option value="67312">67312</option>

                </DropDown>

                < Text onChange={(e) => setPlace(e.target.value)} width="100%" placeholder="flat, house" />



                <Flex>

                    <Button color="danger" onClick={onSubmit} width="100%" margin="20px 20px 0 0" >Add Address</Button>


                    <Button color="white" margin="20px 0 0 0" onClick={() => setAddAddress(false)} width="50%">Cancel</Button>


                </Flex>


            </div>

        </div >

    );
};
