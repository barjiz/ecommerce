import React from 'react'

import { fetchAllProduct, fetchAllProductImage } from './Method'
import { Button } from "../../Components/Button/Button"

import { Navigator } from '../../Components/Route/Router'
import { addToCart, remove } from '../../Redux/cartSlice'
import { useDispatch } from 'react-redux'
import "./Products.css"
import { H4 } from '../../Components/Text/Text'

import { useQuery } from 'react-query'

import { useSelector } from 'react-redux'


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

  const handleAddToCart = (product) => {

    dispatch(addToCart(product))
  }



  return (

    <React.Fragment>

      {product?.product?.filter(fil => fil.category === props.category).map(data => (


        <div key={data._id} class="card" style={{ display: "flex", flexDirection: "column", }}>

          {product_image?.product_image?.filter(fil => fil.product_id === data.product_id).map(img =>
            <>

              <Navigator route={`/product/${data._id}`}>

                <div style={{
                  display: "flex", justifyContent: "center", alignItems: "center"
                }}>

                  <img style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover"
                  }} src={img.productImage} class="card-img-top" alt="..." />


                </div>


                <H4 width="100%" maxWidth="100px" fontWeight="bold" maxHeight="1.4rem" margin="10px 5px">{data.product_name}</H4>

                {data.price.filter((fil, index) => index === 0).map(dd =>

                  <>

                    <H4 margin="15px 5px" borderRadius="5px" padding="3px 10px"
                      backgroundColor="rgba(255, 99, 71, 0.162)" textTransform="lowercase" color="tomato" fontWeight="bold" >{dd.weight}</H4>

                    <H4 fontWeight="bold" color="green" margin="10px 5px">₹ {dd.price}</H4>

                  </>


                )}

              </Navigator>


              {cart.some((ca => ca._id === data._id)) ?

                <Button padding="10px" color="white" onClick={() => dispatch(remove(data))}> Remove</Button>

                :

                <Button padding="10px" color="danger"

                  onClick={() => handleAddToCart({

                    _id: data?._id,
                    product_image: img.productImage,
                    product_name: data?.product_name,
                    qty: 1,
                    price: data.price.filter((fil, index) => index === 0).map(dd => dd.price),
                    weight: data.price.filter((fil, index) => index === 0).map(dd => dd.weight),

                  })}>Add</Button>

              }

            </>

          )}
        </div>
      ))
      }

    </React.Fragment >

  )
}
