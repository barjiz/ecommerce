import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { H3, H4, H5 } from '../../Components/Text/Text'
import { RadioCard } from '../../Components/Radio/RadioCard'
import { addToCart, decreaseCart, removeFromCart } from '../../Redux/cartSlice'
import { Button, ButtonText } from '../../Components/Button/Button'
import { useQueryFetchId } from '../../Utils/useQueryFetch'
import { useDetailLoading } from '../../Utils/useLoading'
import { Flex } from '../../Components/UI/Flex/Flex'
import "./DishDetails.css"

export const DishesDetails = (props) => {

  const { dish_id, setDishDetails, cartColor } = props

  const cart = useSelector((state) => state.cart)


  const { fetchData: product } = useQueryFetchId('product', dish_id)


  const dispatch = useDispatch()


  const thePrice = product?.data && JSON.parse(product?.data?.price)

  const [the_id, setTheId] = useState()

  const [price, setPrice] = useState()

  const [weight, setWeight] = useState()

  const [checked, setChecked] = useState(0);

  const isDetailLoading = useDetailLoading()

  console.log("checked", checked)

  console.log("the_id", the_id)

  console.log("Car", cart.cartItems)


  useEffect(() => {

    if (price?.length === undefined) {

      setTheId(thePrice?.filter((fil, index) => index === 0).map((pr, index) => pr._id).toString())

      setPrice(thePrice?.filter((fil, index) => index === 0).map(pr => pr.price))

      setWeight(thePrice?.filter((fil, index) => index === 0).map(pr => pr.weight))


    }


    product?.data && isDetailLoading(false)


  })


  const handleAddToCart = (productdetails) => {
    dispatch(addToCart(productdetails))
  }


  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem))
  }

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem))
  }



  return (

    <div onClick={setDishDetails(true)} className='dish_details' key={product?.data?._id}>

      <Flex width="100%"
        justifyContent="space-between" alignItems="start">

        <Flex width="fit-content" position="relative" margin="10px">

          <img className='product_image' src={product?.data?.productImage} alt="" />

          <Flex position="absolute" top="0" left="0">

            <H4 backgroundColor="red" padding="2px 10px" borderRadius="0"
              textTransform="lowercase" color="white" fontWeight="bold">{weight}</H4>

          </Flex>

        </Flex>

        <Flex margin="10px" width="fit-content" flexDirection="column" justifyContent="start" alignItems="start">

          <H5 width="150px" margin="0px 10px" fontWeight="bold">{product?.data?.product_name}</H5>

          <H4 margin="10px" textTransform="lowercase" fontWeight="bolder" color="black">₹ {price}</H4>

        </Flex>

        <Flex margin="10px" width="fit-content">

          <div onClick={() => setDishDetails(false)} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "40px", height: "40px", borderRadius: "100%", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>

            <i style={{ fontSize: "2rem" }} class="fa-solid fa-xmark"></i>

          </div>

        </Flex>

      </Flex>




      <div className='dish_items'>

        {thePrice?.map((pr, index) =>

          <RadioCard defaultChecked={index === 0 && "true"} onChange={(e) => {

            setPrice(pr.price)

            setWeight(pr.weight)

            setTheId(pr._id)

            setChecked(index)


          }} id={pr._id}>


            <Flex>

              {/* {console.log("index", index === index && alert("hi"))} */}
              <H4 textTransform="lowercase" color="red" fontWeight="bold">{pr.weight}</H4>

              <H4 textTransform="lowercase" fontWeight="bolder" color="black">₹ {pr.price}</H4>


              {cart.cartItems.some(ca => ca._id === pr._id) ?

                cart && cart.cartItems.filter(fil => fil._id === pr._id).map(cartItem => (

                  product?.data.qty === true ?

                    <ButtonText width="40%" borderRadius="0" padding="10px 25px" margin="5px"
                      color="white" onClick={() => checked === index && handleDecreaseCart(cartItem)}> Remove</ButtonText>

                    :


                    <Flex width="fit-content">

                      <ButtonText borderRadius="0" padding="10px 20px" margin="5px"
                        color="white" onClick={() => checked === index && handleDecreaseCart(cartItem)}>-</ButtonText>

                      <H4 margin="0 10px">{cartItem.cartQuanity}</H4>

                      <ButtonText borderRadius="0" padding="10px 20px" margin="5px"
                        color="white" onClick={() => checked === index && handleIncreaseCart(cartItem)}>+</ButtonText>

                    </Flex>


                ))

                :

                <ButtonText width="40%" borderRadius="0" padding="10px 25px" margin="5px" color={cartColor}

                  onClick={() => checked === index && handleAddToCart({
                    product_id: product?.data?._id,
                    _id: the_id,
                    isQty: product?.data?.qty,
                    product_image: product?.data?.productImage,
                    product_name: product?.data?.product_name,
                    price: price,
                    weight: weight,

                  })}>Add</ButtonText>

              }




            </Flex>


          </RadioCard>

        )}

      </div >


    </div >

  )
}

