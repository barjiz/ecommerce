import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import "./ProductDetails.css"
import { H3, H4 } from '../../Components/Text/Text'
import { RadioCard } from '../../Components/Radio/RadioCard'
import { useQuery } from 'react-query'
import { addToCart, removeFromCart } from '../../Redux/cartSlice'
import { Button } from '../../Components/Button/Button'
import { useQueryFetch, useQueryFetchId } from '../../Utils/useQueryFetch'
import { useLoading } from '../../Utils/useLoading'
import { Header } from '../../Components/Header/Header'
import { Flex } from '../../Components/UI/Flex/Flex'

export const ProductDetails = () => {

  const cart = useSelector((state) => state.cart.cartItems)

  const { id } = useParams()


  const { fetchData: product } = useQueryFetchId('product', id)


  const dispatch = useDispatch()

  const navigate = useNavigate()


  const thePrice = product?.data && JSON.parse(product?.data?.price)

  const [price, setPrice] = useState()

  const [weight, setWeight] = useState()

  const isLoading = useLoading()

  useEffect(() => {

    if (price?.length === undefined) {

      setPrice(thePrice?.filter((fil, index) => index === 0).map(pr => pr.price))

      setWeight(thePrice?.filter((fil, index) => index === 0).map(pr => pr.weight))


    }

    product?.data && isLoading(false)

  })


  const handleAddToCart = (productdetails) => {
    dispatch(addToCart(productdetails))
  }


  const handleRemoveFromCart = (productdetails) => {
    dispatch(removeFromCart(productdetails))
  }



  return (


    <div className='product_details' key={product?.data?._id}>

      <i style={{ color: "black" }} onClick={() => navigate("/")} class="fa-solid fa-angle-left"></i>


      <div className='product_holder'>

        <img src={product?.data?.productImage} />


        <Flex width="100%">


          <Flex>

            <H3 fontWeight="bold" margin="15px">{product?.data?.product_name}</H3>

          </Flex>

          <Flex>

            <H3 fontWeight="bold" color="green" margin="15px">₹ {price}</H3>

            <H4 margin="15px" borderRadius="5px" padding="3px 10px"
              backgroundColor="rgba(255, 99, 71, 0.162)" textTransform="lowercase"
              color="tomato" fontWeight="bold" >{weight}</H4>


          </Flex>



        </Flex>

      </div>

      <div className='product_items'>
        
        {thePrice?.map(pr =>

          <RadioCard onChange={(e) => {

            setPrice(pr.price)

            setWeight(pr.weight)

            handleRemoveFromCart(product?.data)

          }} id={pr._id} value={pr.price}>

            <H4 flex="1" textTransform="lowercase" color="tomato" fontWeight="bold">{pr.weight}</H4>

            <H4 flex="1" fontWeight="bold" color="green">₹ {pr.price}</H4>

          </RadioCard>

        )}



        <Flex position="fixed" bottom="0" left="0" margin="10px 0"
          justifyContent="center" alignItems="center">

          {cart.some(ca => ca._id === product?.data._id) ?


            <Button width="96%" borderRadius="15px" color="white" onClick={() => handleRemoveFromCart(product?.data)}> Remove</Button>

            :

            <Button width="96%" borderRadius="15px" color="green"

              onClick={() => handleAddToCart({

                _id: product?.data?._id,
                isQty: product?.data?.qty,
                product_image: product?.data?.productImage,
                product_name: product?.data?.product_name,
                price: price,
                weight: weight,

              })}>Add</Button>
          }

        </Flex>


      </div>



    </div >

  )
}
