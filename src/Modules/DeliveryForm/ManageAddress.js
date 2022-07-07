import React, { useState } from 'react'
import { H3, H4 } from '../../Components/Text/Text';
import { Flex } from '../../Components/UI/Flex/Flex';
import { Button } from '../../Components/Button/Button';
import { CreateAddress } from "../../Modules/Address/CreateAddress/CreateAddress"
import { RadioCard } from '../../Components/Radio/RadioCard';
import { decodeJwtToken } from '../../Utils/decode.jwt';
import { useQueryFetchId } from '../../Utils/useQueryFetch';
import { Toast } from '../../Components/Toast/Toast';
import { useEffect } from 'react';
import "./ManageAddress.css"

export const ManageAddress = ({ setAddress, setSelectAddress }) => {


    const user_id = decodeJwtToken();

    const { fetchData: loggedprofiles, refetchData: refetch } = useQueryFetchId("user", user_id)


    const profile = loggedprofiles?.data?.user;


    const [checked, setChecked] = useState(false)


    useEffect(() => {
        setChecked(true)
    }, [setChecked])



    return (
        <div className='manage_address'>

            <div
                onClick={() => setSelectAddress(false)} 
                style={{
                    display: "flex", justifyContent: "center",
                    margin: "10px",
                    alignItems: "center", width: "35px", height: "35px",
                    borderRadius: "100%", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                }}>

                <i style={{ fontSize: "1.6rem" }} class="fa-solid fa-xmark"></i>

            </div>


            {profile?.address?.map(data =>


                <RadioCard margin="20px 0" checked={checked} onChange={checked && setAddress(data)} id={data._id} value={data}>

                    <Flex width="100%" flexDirection="column" alignItems="flex-start">

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


                    </Flex>

                </RadioCard>

            )}

            <Flex>
                <Button width="95%" color="green" margin="auto">Add new Address</Button>
            </Flex>

        </div >

    )
}
