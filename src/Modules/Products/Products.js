import React from 'react'
import { Button } from "../../Components/Button/Button"
import { Navigator } from '../../Components/Route/Router'
import { addToCart, decreaseCart, removeFromCart } from '../../Redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { H5 } from '../../Components/Text/Text'
import { Flex } from '../../Components/UI/Flex/Flex'
import { useQueryFetch } from '../../Utils/useQueryFetch'
import { useNavigate } from 'react-router-dom'
import { useDetailLoading, useLoading } from '../../Utils/useLoading'


export const Products = (props) => {


  const { category, flexDirection, className, setDishDetails, setDishId } = props;



  const isDetailLoading = useDetailLoading()



  const cart = useSelector((state) => state.cart.cartItems)

  const { fetchData: product } = useQueryFetch('product')

  const navigate = useNavigate();

  const isLoading = useLoading()


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

      {product?.filter(fil => fil.category === category).map(data => (

        <div className={className} >

          <div key={data._id} class="card" style={{ display: "flex", flexDirection: "column", margin: props.margin }}>

            <img onClick={() => {
              setDishDetails(true)
              isDetailLoading(true);
              setDishId(data._id)
            }}
              style={{
                width: props.width,
                height: props.height,
                objectFit: "cover"
              }} src={data.productImage} class="card-img-top" alt="..." />

            <H5 width="100%" maxWidth="100px" fontWeight="bold" maxHeight="1.4rem" margin="10px 5px">{data.product_name}</H5>

            {JSON.parse(data.price).filter((fil, index) => index === 0).map(dd =>

              <>

                <Flex onClick={() => {
                  setDishDetails(true)
                  isDetailLoading(true);
                  setDishId(data._id)
                }}
                  backgroundColor="rgba(255, 99, 71, 0.162)" padding="3px 10px"
                  margin="10px 0px" borderRadius="5px">

                  <H5 textTransform="lowercase" color="tomato" fontWeight="bold" >{dd.weight}</H5>
                  <i style={{ fontSize: "1rem" }} class="fa-solid fa-chevron-down"></i>

                </Flex>

                {dd.offer.length > 0 ?
                  <Flex margin="10px" justifyContent="flex-start">
                    <H5 fontWeight="bold" color="green" >
                      {/* <del>  */}
                      ₹ {dd.price}
                      {/* </del> */}
                    </H5>
                    <H5 borderRadius="30px" backgroundColor="#7B68EE" padding="2px 8px" fontWeight="bold" color="white" margin="0 10px">₹ {dd.offer}</H5>

                  </Flex>

                  :

                  <Flex margin="16px 10px" justifyContent="flex-start">
                    <H5 fontWeight="bold" color="green">₹ {dd.price}</H5>
                  </Flex>

                }


                {cart.some(ca => ca.product_id === data._id) ?

                  <Button width="100%"
                    color="white"
                    onClick={() => {

                      setDishDetails(true)
                      isDetailLoading(true);
                      setDishId(data._id)

                    }}> Remove</Button>

                  :

                  <Flex>

                    <Button width="100%" color="green"

                      onClick={() => handleAddToCart({
                        product_id: data?._id,
                        _id: dd._id,
                        isQty: data?.qty,
                        product_image: data?.productImage,
                        product_name: data?.product_name,
                        price: dd.price,
                        weight: dd.weight,

                      })}>Add</Button>

                  </Flex>

                }
              </>

            )}

          </div>
        </div>

      ))}

    </React.Fragment >

  )
}
