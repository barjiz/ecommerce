import React, { useState } from 'react'
import { H3, H4 } from '../../Components/Text/Text';
import { Flex } from '../../Components/UI/Flex/Flex';
import { Button } from '../../Components/Button/Button';
import { CreateAddress } from "../../Modules/Address/CreateAddress/CreateAddress"
import "./UserAddress.css"
import { RadioCard } from '../../Components/Radio/RadioCard';
import { EditAddress } from './EditAddress/EditAddress';
import { decodeJwtToken } from '../../Utils/decode.jwt';
import { useQueryFetchId } from '../../Utils/useQueryFetch';
import { Toast } from '../../Components/Toast/Toast';
import { useEffect } from 'react';

export const UserAddress = ({ nextbtn, nextPage, prevPage, setAddress }) => {


    const user_id = decodeJwtToken();

    const loggedprofiles = useQueryFetchId("user", user_id)

    const refetch = loggedprofiles.refetchData;

    const profile = loggedprofiles?.fetchedData?.data?.user;


    const [addAddress, setAddAddress] = useState(false)

    const [editAddress, setEditAddress] = useState(false)

    const [isToast, setToast] = useState()

    const Delete = () => {

    }


    const [checked, setChecked] = useState(false)


    useEffect(() => {
        setChecked(true)
    }, [setChecked])



    return (
        <div className='user_address'>


            <Toast
                showToast={isToast}
                message="Create an Address to continue"
            />

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


                                <RadioCard checked={checked} onChange={checked && setAddress(data)} id={data._id} value={data}>
                                    {console.log("profile", data)
                                    }

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
                                            <Button width="100%" color="green" margin="20px 20px 0 0" onClick={() => setEditAddress(true)}>Edit</Button>
                                            <Button onClick={Delete} width="60%" color="red" margin="20px 0 0 0">Delete</Button>
                                        </Flex>



                                    </Flex>



                                </RadioCard>


                            )}


                        </div>


                    }



                    {profile?.address.length === 0 && <Button color="danger" margin="10px auto"
                        onClick={() => setAddAddress(true)}>Add New Address</Button>}


                    {nextbtn &&

                        <Flex width="100%" position="fixed" bottom="0" left="0" padding="60px 0">

                            <Button color="white" onClick={prevPage} margin="10px">Back</Button>

                            {profile?.address.length === 0 ?
                                <Button width="100%" onClick={() => setToast("show")} margin="10px" >Next</Button>
                                :
                                <Button color="blue" onClick={nextPage} width="100%" margin="10px" >Next</Button>

                            }
                        </Flex>}


                </>
            }




            {editAddress && <EditAddress profile={profile} refetch={refetch} setEditAddress={setEditAddress} />}

        </div>
    )
}
