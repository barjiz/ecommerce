import React from 'react'

import { fetchAllProduct, fetchAllProductImage } from './Method'
import { Button } from "../../Components/Button/Button"

import { Navigator } from '../../Components/Route/Router'
import { addToCart, decreaseCart, removeFromCart } from '../../Redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import "./Products.css"
import { H5 } from '../../Components/Text/Text'

import { useQuery } from 'react-query'
import { Flex } from '../../Components/UI/Flex/Flex'

export const Products = (props) => {

  const cart = useSelector((state) => state.cart.cartItems)

  const { data: product } = useQuery('product', fetchAllProduct, {

    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  const { data: product_image, } = useQuery('product_image', fetchAllProductImage, {

    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })


  const dispatch = useDispatch()

  const handleAddToCart = (data) => {
    dispatch(addToCart(data))
  }


  const handleRemoveFromCart = (data) => {
    dispatch(removeFromCart(data))
  }

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem))
  }

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem))
  }




  return (

    <React.Fragment>

      {product?.product?.filter(fil => fil.category === props.category).map(data => (
        <div className={props.class} >


          <div key={data._id} class="card" style={{ display: "flex", flexDirection: "column", }}>

            {product_image?.product_image?.filter(fil => fil.product_id === data.product_id).map(img =>
              <>

                <Navigator route={`/product/${data._id}`}>

                  <div style={{
                    display: "flex", justifyContent: "center", alignItems: "center"
                  }}>

                    <img style={{
                      width: props.width,
                      height: props.height,
                      objectFit: "cover"
                    }} src={img.productImage} class="card-img-top" alt="..." />


                  </div>


                  <H5 width="100%" maxWidth="100px" fontWeight="bold" maxHeight="1.4rem" margin="10px 5px">{data.product_name}</H5>

                  {data.price.filter((fil, index) => index === 0).map(dd =>

                    <>

                      <H5 margin="15px 5px" borderRadius="5px" padding="3px 10px"
                        backgroundColor="rgba(255, 99, 71, 0.162)" textTransform="lowercase" color="tomato" fontWeight="bold" >{dd.weight}</H5>


                      {dd.offer.length > 0 ?
                        <Flex margin="10px" justifyContent="flex-start">
                          <H5 fontWeight="bold" color="green" > <del> ₹ {dd.price}</del></H5>
                          <H5 borderRadius="30px" backgroundColor="#7B68EE" padding="2px 8px" fontWeight="bold" color="white" margin="0 10px">₹ {dd.offer}</H5>
                        </Flex>

                        :

                        <Flex margin="16px 10px" justifyContent="flex-start">
                          <H5 fontWeight="bold" color="green">₹ {dd.price}</H5>
                        </Flex>

                      }

                    </>



                  )}

                </Navigator>

                {cart.some(ca => ca._id === data._id) ?


                  cart.filter(fil => fil._id === data._id).map(cartItem =>


                    cartItem.isQty ?


                      <Flex>

                        <Button color="white" width="10px" onClick={() => handleDecreaseCart(data)}>-</Button>

                        {cartItem.cartQuanity}

                        <Button color="white" width="10px" onClick={() => handleIncreaseCart(data)}>+</Button>

                      </Flex>


                      :

                      <Button width="100%" color="white" onClick={() => handleRemoveFromCart(data)}> Remove</Button>



                  )

                  :

                  <Flex>

                    <Button width="100%" color="danger"

                      onClick={() => handleAddToCart({

                        _id: data?._id,
                        isQty: data.qty,
                        product_image: img.productImage,
                        product_name: data?.product_name,
                        price: data.price.filter((fil, index) => index === 0).map(dd => parseInt(dd.price)),
                        weight: data.price.filter((fil, index) => index === 0).map(dd => dd.weight),

                      })}>Add</Button>

                  </Flex>


                }


              </>

            )}


          </div>
        </div>
      ))
      }

    </React.Fragment >

  )
}
