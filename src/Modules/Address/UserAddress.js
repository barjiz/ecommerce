import React, { useCallback, useEffect, useState } from 'react'


import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { fetchProfile } from '../Profile/Method';
import { H2, H3, H4 } from '../../Components/Text/Text';
import { Flex } from '../../Components/UI/Flex/Flex';
import { Card } from '../../Components/Card/Card';
import { Button, PrimaryBtn } from '../../Components/Button/Button';

import { CreateAddress } from "../../Modules/Address/CreateAddress/CreateAddress"

import "./UserAddress.css"
import { RadioCard } from '../../Components/Radio/RadioCard';
import { useQuery } from 'react-query';

export const UserAddress = ({ setAddress }) => {


    var token = localStorage.getItem("authToken");
    var decoded = jwt_decode(token);


    // const navigate = useNavigate()

    // const [profile, setProfile] = useState()


    // const FetchAddress = useCallback(() => {

    //     fetchProfile(decoded.id).then(res => setProfile(res.data.user))

    // })



    // useEffect(() => {

    //     FetchAddress()

    // }, [setProfile])


    const { refetch, data: loggedprofiles } = useQuery(['loggedprofiles', decoded.id], () => fetchProfile(decoded.id), {

        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })



    const profile = loggedprofiles?.data?.user;


    const [addAddress, setAddAddress] = useState(false)



    return (
        <div className='user_address'>


            {addAddress ? <CreateAddress refetch={refetch} setAddAddress={setAddAddress} /> :


                <>

                    {profile?.address.length === 0 ?

                        <div className='empty_address'>

                            <i class="fa-solid fa-location-dot"></i>


                            <H3 margin="20px 0">No Address Added Yet</H3>


                        </div>

                        :

                        <div style={{ width: "100%" }}>


                            {profile?.address?.map(data =>


                                <RadioCard onChange={(e) => { setAddress(data) }} id={data._id} value={data}>


                                    <Flex padding="20px 10px" width="100%" flexDirection="column" alignItems="flex-start">


                                        <Flex>
                                            <H4 flex="1" fontWeight="bold" margin="10px">Full Name :</H4>
                                            <H4 flex="2" margin="10px">{data.full_name}</H4>
                                        </Flex>

                                        <Flex>
                                            <H4 flex="1" fontWeight="bold" margin="10px">Phone :</H4>
                                            <H4 flex="2" margin="10px">{data.phone_number}</H4>
                                        </Flex>

                                        <Flex>
                                            <H4 flex="1" fontWeight="bold" margin="10px">Pincode :</H4>
                                            <H4 flex="2" margin="10px">{data.pincode}</H4>
                                        </Flex>

                                        <Flex>
                                            <H4 flex="1" fontWeight="bold" margin="10px">Place :</H4>
                                            <H4 flex="2" margin="10px">{data.place}</H4>
                                        </Flex>

                                        <Flex>
                                            <Button width="100%" color="green" margin="20px 20px 0 0">Edit</Button>
                                            <Button width="60%" color="red" margin="20px 0 0 0">Delete</Button>
                                        </Flex>



                                    </Flex>





                                </RadioCard>


                            )}


                        </div>


                    }



                    <Button color="danger" width="95%" margin="10px auto"
                        onClick={() => setAddAddress(true)}>Add New Address</Button>

                </>
            }

        </div>
    )
}
