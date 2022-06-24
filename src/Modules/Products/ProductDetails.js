import React, { useEffect, useState } from 'react'

import { fetchAllProductImage, fetchOneProduct } from './Method'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import "./ProductDetails.css"
import { H3, H4 } from '../../Components/Text/Text'
import { RadioCard } from '../../Components/Radio/RadioCard'
import { useQuery } from 'react-query'
import { addToCart, removeFromCart } from '../../Redux/cartSlice'
import { Button } from '../../Components/Button/Button'
import { useQueryFetch, useQueryFetchId } from '../../Utils/useQueryFetch'

export const ProductDetails = () => {

  const cart = useSelector((state) => state.cart.cartItems)

  const { id } = useParams()



  const { fetchData: product } = useQueryFetchId('product', id)


  const { fetchData: product_image } = useQueryFetch('productimage')



  const dispatch = useDispatch()

  const handleAddToCart = (productdetails) => {
    dispatch(addToCart(productdetails))
  }


  const handleRemoveFromCart = (productdetails) => {
    dispatch(removeFromCart(productdetails))
  }


  const productdetails = product?.data?.product

  const [price, setPrice] = useState()

  const [weight, setWeight] = useState()


  useEffect(() => {

    if (price?.length === undefined) {

      setPrice(productdetails?.price.filter((fil, index) => index === 0).map(pr => pr.price))

      setWeight(productdetails?.price.filter((fil, index) => index === 0).map(pr => pr.weight))

    }

  })



  return (


    <div className='product_details' key={productdetails?._id}>


      {product_image?.product_image?.filter(fil => fil.product_id === productdetails?.product_id).map(img =>

        <div className='product_holder'>


          <div className='product_items'>

            <H3 fontWeight="bold" margin="15px">{productdetails?.product_name}</H3>

            <H4 margin="15px" borderRadius="5px" padding="3px 10px"
              backgroundColor="rgba(255, 99, 71, 0.162)" textTransform="lowercase"
              color="tomato" fontWeight="bold" >{weight}</H4>

            <H3 fontWeight="bold" color="green" margin="15px">₹ {price}</H3>

            <img src={img.productImage} />


          </div>

          <div className='product_items'>

            {productdetails?.price.map(pr =>

              <RadioCard onChange={(e) => {

                setPrice(pr.price)

                setWeight(pr.weight)

                handleRemoveFromCart(productdetails)

              }} id={pr._id} value={pr.price}>

                <H4 textTransform="lowercase" color="tomato" fontWeight="bold" margin="10px 5px">{pr.weight}</H4>

                <H4 fontWeight="bold" color="green" margin="10px 5px">₹ {pr.price}</H4>

              </RadioCard>


            )}


            {cart.some(ca => ca._id === productdetails._id) ?


              <Button width="100%" padding="10px" color="white" onClick={() => handleRemoveFromCart(productdetails)}> Remove</Button>

              :

              <Button width="100%" padding="10px" color="danger"

                onClick={() => handleAddToCart({

                  _id: productdetails?._id,
                  isQty: productdetails?.qty,
                  product_image: img.productImage,
                  product_name: productdetails?.product_name,
                  price: price,
                  weight: weight,

                })}>Add</Button>
            }


          </div>

        </div >

      )}

    </div >

  )
}
