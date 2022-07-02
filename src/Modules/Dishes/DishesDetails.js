import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { H3, H4 } from '../../Components/Text/Text'
import { RadioCard } from '../../Components/Radio/RadioCard'
import { addToCart, removeFromCart } from '../../Redux/cartSlice'
import { Button } from '../../Components/Button/Button'
import { useQueryFetchId } from '../../Utils/useQueryFetch'
import { useDetailLoading } from '../../Utils/useLoading'
import { Flex } from '../../Components/UI/Flex/Flex'
import "./DishDetails.css"

export const DishesDetails = (props) => {

  const { dish_id, setDishDetails, cartColor } = props

  const cart = useSelector((state) => state.cart.cartItems)


  const { fetchData: product } = useQueryFetchId('product', dish_id)


  const dispatch = useDispatch()


  const thePrice = product?.data && JSON.parse(product?.data?.price)

  const [price, setPrice] = useState()

  const [weight, setWeight] = useState()

  const isDetailLoading = useDetailLoading()



  useEffect(() => {

    if (price?.length === undefined) {

      setPrice(thePrice?.filter((fil, index) => index === 0).map(pr => pr.price))

      setWeight(thePrice?.filter((fil, index) => index === 0).map(pr => pr.weight))


    }


    product?.data && isDetailLoading(false)


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

        {thePrice?.map((pr, index) =>

          <RadioCard defaultChecked={index === 0 && "true"} onChange={(e) => {

            setPrice(pr.price)

            setWeight(pr.weight)

            handleRemoveFromCart(product?.data)

          }} id={pr._id} value={pr.price}>

            <H4 backgroundColor="red" padding="5px 15px" borderRadius="10px"
              textTransform="lowercase" color="white" fontWeight="bold">{pr.weight}</H4>

            <H4 backgroundColor="black" padding="5px 15px" borderRadius="10px"
              fontWeight="bolder" color="white">₹ {pr.price}</H4>

          </RadioCard>

        )}


        <Flex backgroundColor="white" position="fixed" bottom="0" left="0" justifyContent="space-between" alignItems="center">


          <H3  padding="5px 20px" borderRadius="10px"
            margin="15px" fontWeight="bold" color="black" >₹ {price}</H3>


          {cart.some(ca => ca._id === product?.data._id) ?


            <Button width="60%" borderRadius="15px" margin="15px"
              color="white" onClick={() => handleRemoveFromCart(product?.data)}> Remove</Button>

            :

            <Button width="60%" borderRadius="15px" color={cartColor} margin="15px"

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
