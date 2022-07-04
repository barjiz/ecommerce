import React from 'react'
import { Flex } from "../../Components/UI/Flex/Flex"
import { H3, H4 } from "../../Components/Text/Text"
import "./OrderDetails.css"
import { Header } from '../../Components/Header/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import { Button } from '../../Components/Button/Button'
import { useQueryFetch } from '../../Utils/useQueryFetch';

export const OrderDetails = () => {


  const { id } = useParams()

  const navigate = useNavigate()

  const { fetchData: orders } = useQueryFetch('order')



  return (


    <div className='order_details'>


      <Header icon={true} navigate="orders" title="order details" />


      {orders?.order?.filter(fil => fil._id === id).map(data =>

        <div className="order_items">

          <div className='order_address'>

            {data?.address.map(dat => (

              <>

                <Flex>
                  <H4 margin="5px" color="brown" fontWeight="bold" flex="1">Name :</H4>
                  <H4 margin="5px" flex="3" fontWeight="bold">{dat.full_name}</H4>
                </Flex>

                <Flex>
                  <H4 margin="5px" color="brown" fontWeight="bold" flex="1">Phone :</H4>
                  <H4 margin="5px" flex="3" fontWeight="bold">{dat.phone_number}</H4>
                </Flex>
                <Flex>
                  <H4 margin="5px" color="brown" fontWeight="bold" flex="1">Pincode :</H4>
                  <H4 margin="5px" flex="3" fontWeight="bold">{dat.pincode}</H4>
                </Flex>

                <Flex>
                  <H4 margin="5px" color="brown" fontWeight="bold" flex="1">Place :</H4>
                  <H4 margin="5px" flex="3" fontWeight="bold">{dat.place}</H4>
                </Flex>

              </>

            ))}

          </div>

          <div className='order_cart'>

            {data.cart.product.map(prod =>

              <div className="order_cart_items" >
                <H4 flex="1" fontWeight="bold">{prod.product_name}</H4>
                <H4 flex="1" color="green" fontWeight="bold">{"₹ " + prod.price}</H4>
                <H4 flex="1" color="red" fontWeight="bold">{prod.weight}</H4>

              </div>

            )}

          </div>


        </div >

      )
      }

      <Flex position="fixed" bottom="80px">


        <Button width="95%" color="dark" onClick={() => navigate(`/orders`)}
          margin="0px auto" >Back</Button>



      </Flex>

    </div >
  )
}

