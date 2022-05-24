import React, { useEffect, useState } from 'react'
import { fetchAllOrders, fetchAllProfile } from './Method'

import { Flex } from "../../Components/UI/Flex/Flex"

import { H2, H3, H4 } from "../../Components/Text/Text"

import jwt_decode from "jwt-decode";
import { Button, SecondaryBtn } from "../../Components/Button/Button"

import "./Order.css"
import { Header } from '../../Components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { Navigator } from '../../Components/Route/Router';
import { useQuery } from 'react-query';
import axios from 'axios';
import { BASE_URL } from '../../url';

export const Order = () => {

  var token = localStorage.getItem("authToken");
  var decoded = jwt_decode(token);

  const navigate = useNavigate()

  const { refetch, data: orders } = useQuery('orders', fetchAllOrders, {

    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  const onSubmit = (order_id) => {

    axios.delete(`${BASE_URL}order/${order_id}`).then(() => refetch())

  }


  return (


    <div className='order_history'>

      <Header backgroundColor="white" justifyContent="center" >


        <H3 fontWeight="bold" >My Orders</H3>

      </Header>

      {orders?.data?.orders?.filter(fil => fil.user_id === decoded.id).length === 0 ?


        <div className='empty_order'>

          <i class="fa-brands fa-searchengin"></i>

          <H2>No Order Found</H2>

        </div>

        :

        orders?.data?.orders?.filter(fil => fil.user_id === decoded.id).map(data =>

          <div className="order_items">

            <Flex >
              <H4 fontWeight="bold" color="green" margin="10px 15px" maxWidth="60%" maxHeight="1.2rem" >{data.date}</H4>
            </Flex>

            <div className='order_address'>

              <Flex>
                <H4 margin="5px" color="brown" fontWeight="bold" flex="1">Name :</H4>
                <H4 margin="5px" flex="3" fontWeight="bold">{data?.address.full_name}</H4>
              </Flex>

              <Flex>
                <H4 margin="5px" color="brown" fontWeight="bold" flex="1">Phone :</H4>
                <H4 margin="5px" flex="3" fontWeight="bold">{data?.address.phone_number}</H4>
              </Flex>
              <Flex>
                <H4 margin="5px" color="brown" fontWeight="bold" flex="1">Pincode :</H4>
                <H4 margin="5px" flex="3" fontWeight="bold">{data?.address.pincode}</H4>
              </Flex>

              <Flex>
                <H4 margin="5px" color="brown" fontWeight="bold" flex="1">Place :</H4>
                <H4 margin="5px" flex="3" fontWeight="bold">{data?.address.place}</H4>
              </Flex>


              <Flex >

                <Button width="50%" margin="30px 20px 0 0" onClick={() => navigate(`/orders/${data._id}`)} color="dodgerblue">View Details</Button>

                <Button onClick={(order_id) => onSubmit(order_id = data._id)} width="50%" margin="30px 0px 0 0" color="danger">Cancel Order</Button>



              </Flex>


            </div>

          </div >

        )
      }




    </div >
  )
}

