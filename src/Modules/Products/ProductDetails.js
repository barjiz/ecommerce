import React, { useCallback, useEffect, useState } from 'react'

import { fetchAllProductImage, fetchOneProduct } from './Method'

import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, remove } from '../../Redux/cartSlice'

import "./ProductDetails.css"
import { H3, H4 } from '../../Components/Text/Text'
import { RadioCard } from '../../Components/Radio/RadioCard'
import { Button } from '../../Components/Button/Button'
import { useQuery } from 'react-query'


export const ProductDetails = () => {


  const { id } = useParams()


  const navigate = useNavigate()


  const { data: product } = useQuery(['product', id], () => fetchOneProduct(id), {

    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  const { data: product_image, } = useQuery('product_image', fetchAllProductImage, {

    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  const productdetails = product?.data?.product


  const cart = useSelector((state) => state.cart.cartItems)

  const dispatch = useDispatch()

  const handleAddToCart = (product) => {

    dispatch(addToCart(product))
  }

  const [price, setPrice] = useState()

  const [weight, setWeight] = useState()


  useEffect(() => {

    if (price?.length === undefined) {

      setPrice(productdetails?.price.filter((fil, index) => index === 0).map(pr => pr.price))

      setWeight(productdetails?.price.filter((fil, index) => index === 0).map(pr => pr.weight))

    }

  })



  return (


    <div className='product_details'>


      <div className='product_header'>

        <i onClick={() => navigate(`/`)} class="fa-solid fa-angle-left"></i>

        <H3 fontWeight="bold">Cart</H3>

        <i onClick={() => navigate(`/cart`)} class="fa-solid fa-cart-shopping"></i>

      </div>


      <div style={{ width: "100%" }} key={productdetails?._id}>

        <H3 fontWeight="bold" margin="15px">{productdetails?.product_name}</H3>

        <H4 margin="15px" borderRadius="5px" padding="3px 10px"
          backgroundColor="rgba(255, 99, 71, 0.162)" textTransform="lowercase"
          color="tomato" fontWeight="bold" >{weight}</H4>

        <H3 fontWeight="bold" color="green" margin="15px">₹ {price}</H3>


        {product_image?.product_image?.filter(fil => fil.product_id === productdetails?.product_id).map(img =>


          <div>
            <img style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              margin: "auto"
            }} src={img.productImage} class="card-img-top" alt="..." />


            {productdetails?.price.map(pr =>

              <RadioCard onChange={(e) => {

                setPrice(pr.price)

                setWeight(pr.weight)

              }} id={pr._id} value={pr.price}>

                <H4 textTransform="lowercase" color="tomato" fontWeight="bold" margin="10px 5px">{pr.weight}</H4>

                <H4 fontWeight="bold" color="green" margin="10px 5px">₹ {pr.price}</H4>


              </RadioCard>


            )}


            <div className='add_cart'>

              {cart.some((data => data._id === productdetails?._id)) ?

                <Button color="white" padding="15px" margin="10px auto" width="90%"
                  onClick={() => dispatch(remove(productdetails))}> Remove</Button>

                :

                <Button color="danger" padding="15px" margin="10px auto" width="90%"

                  onClick={() => handleAddToCart({

                    _id: productdetails?._id,
                    product_image: img.productImage,
                    product_name: productdetails?.product_name,
                    price: price,
                    weight: weight,

                  })}>Add to Basket</Button>

              }

            </div>

          </div>

        )}

      </div>


    </div >

  )
}
