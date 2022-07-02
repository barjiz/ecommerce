import React from 'react'
import { Button } from "../../Components/Button/Button"
import { Navigator } from '../../Components/Route/Router'
import { addToCart, decreaseCart, removeFromCart } from '../../Redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { H4, H5 } from '../../Components/Text/Text'
import { Flex } from '../../Components/UI/Flex/Flex'
import { useQueryFetch } from '../../Utils/useQueryFetch'
import { useNavigate } from 'react-router-dom'
import { useLoading } from '../../Utils/useLoading'


export const Dishes = (props) => {

  const cart = useSelector((state) => state.cart.cartItems)


  const { category, flexDirection, className, setDishDetails, setDishId } = props;

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

        <div className={className} style={{ width: "100%" }}>

          <div key={data._id} style={{
            width: "100%",
            display: "flex", flexDirection: flexDirection, justifyContent: 'start', margin: "10px",
            borderRadius: "30px",
          }}>



            <img onClick={() => {
              setDishDetails(true)
              // isLoading(true);
              setDishId(data._id)

            }

            } style={{
              boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px", borderRadius: "30px",
              width: "150px",
              height: "170px",
              objectFit: "cover"
            }} src={data.productImage} class="card-img-top" alt="..." />


            <H4 fontWeight="bolder" margin="10px 5px">{data.product_name}</H4>



          </div>

        </div>
      ))
      }

    </React.Fragment >

  )
}
