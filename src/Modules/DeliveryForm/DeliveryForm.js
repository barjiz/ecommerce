import React, { useState } from 'react'

import { Cart } from '../Cart/Cart'
import { ConfirmOrder } from '../ConfirmOrder/ConfirmOrder'
import { ManageAddress } from './ManageAddress'

export const DeliveryForm = () => {

    const [tabs, setTabs] = useState(1)


    const [address, setAddress] = useState(
        {
            id: "1",
            fullName: "barjiz",
            phoneNumber: "94838383",
            pinCode: "57464",
            place: "mavoor"
        }
    );




    const nextPage = () => {

        setTabs(tabs + 1)

    }


    const prevPage = () => {

        setTabs(tabs - 1)

    }


    return (

        <div>

            {
                tabs === 1 ? <Cart nextPage={nextPage} /> :

                    tabs === 2 ? <ManageAddress
                        nextPage={nextPage}
                        setAddress={setAddress}

                        prevPage={prevPage} /> :

                        tabs === 3 ? <ConfirmOrder
                            address={address}
                            prevPage={prevPage}
                            setTabs={setTabs} /> : null
            }

        </div>


    )
}
