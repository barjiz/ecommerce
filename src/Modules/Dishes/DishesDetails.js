import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { H3, H4 } from '../../Components/Text/Text'
import { RadioCard } from '../../Components/Radio/RadioCard'
import { useQuery } from 'react-query'
import { addToCart, removeFromCart } from '../../Redux/cartSlice'
import { Button } from '../../Components/Button/Button'
import { useQueryFetch, useQueryFetchId } from '../../Utils/useQueryFetch'
import { useLoading } from '../../Utils/useLoading'
import { Flex } from '../../Components/UI/Flex/Flex'
import { Header } from '../../Components/Header/Header'
import "./DishDetails.css"

export const DishesDetails = (props) => {

  const { dish_id, setDishDetails } = props

  const cart = useSelector((state) => state.cart.cartItems)


  const { fetchData: product } = useQueryFetchId('product', dish_id)


  const dispatch = useDispatch()


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


    <div onClick={setDishDetails(true)} className='dish_details' key={product?.data?._id}>

      <Flex>


        <H3 fontWeight="bold" margin="15px">{product?.data?.product_name}</H3>

        <div onClick={() => setDishDetails(false)} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "40px", height: "40px", borderRadius: "100%", margin: "20px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>

          <i style={{ fontSize: "2rem" }} class="fa-solid fa-xmark"></i>

        </div>



      </Flex>


      <div className='dish_items'>

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


        <Flex backgroundColor="white" position="fixed" bottom="0" left="0" justifyContent="space-between" alignItems="center">


          <H3 margin="15px" fontWeight="bold" color="green" >₹ {price}</H3>


          {cart.some(ca => ca._id === product?.data._id) ?


            <Button width="60%" borderRadius="15px"
              color="white" onClick={() => handleRemoveFromCart(product?.data)}> Remove</Button>

            :

            <Button width="60%" borderRadius="15px" color="dark" margin="15px"

              onClick={() => handleAddToCart({

                _id: product?.data?._id,
                isQty: product?.data?.qty,
                product_image: product?.data?.productImage,
                product_name: product?.data?.product_name,
                price: price,
                weight: weight,

              })}>Add to cart</Button>
          }

        </Flex>


      </div >


    </div >

  )
}
