import React, { useState } from 'react'
import { addToCart, decreaseCart, removeFromCart } from '../../Redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { H4 } from '../../Components/Text/Text'
import { useQueryFetch } from '../../Utils/useQueryFetch'
import { useNavigate } from 'react-router-dom'
import { useDetailLoading } from '../../Utils/useLoading'
import { FastFoodDetails } from './FastFoodDetails'
import { OpacityBg } from '../../Components/UI/OpacityBg/OpacityBg'


export const Fastfood = (props) => {



  const [dishDetails, setDishDetails] = useState(false)

  const [dish_id, setDishId] = useState("617839c21e0d94f601e2d6f4");


  const cart = useSelector((state) => state.cart.cartItems)

  const { category, flexDirection, className } = props;

  const { fetchData: product } = useQueryFetch('product')

  const navigate = useNavigate();

  const isDetailLoading = useDetailLoading()


  const dispatch = useDispatch()

  const handleAddToCart = (data) => {
    dispatch(addToCart(data))
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
              isDetailLoading(true);
              setDishId(data._id)

            }

            } style={{
              boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px", borderRadius: "30px",
              width: "150px",
              height: "170px",
              objectFit: "cover"
            }} src={data.image} class="card-img-top" alt="..." />


            <H4 fontWeight="bolder" margin="10px 5px">{data.name}</H4>

          </div>

        </div>
      ))
      }


      {dishDetails &&

        <>

          <OpacityBg onClick={() => {
            setDishDetails(false)
            isDetailLoading(false)
          }} />

          <FastFoodDetails cartColor="orange" setDishDetails={setDishDetails} dish_id={dish_id} />

        </>

      }

    </React.Fragment >

  )
}
