import React, { useState } from 'react'
import { Cart } from '../Cart/Cart'
import { ConfirmOrder } from '../ConfirmOrder/ConfirmOrder'

export const DeliveryForm = () => {

    const [tabs, setTabs] = useState(1)

    const [address, setAddress] = useState([]);

    const nextPage = () => {

        setTabs(tabs + 1)

    }

    const prevPage = () => {

        setTabs(tabs - 1)

    }


    return (

        <div>

            {
                tabs === 1 ? <Cart
                    address={address}
                    nextPage={nextPage}
                    setAddress={setAddress} /> :

                    tabs === 2 ? <ConfirmOrder
                        address={address}
                        prevPage={prevPage}
                        setTabs={setTabs} /> : null
            }

        </div>


    )
}
