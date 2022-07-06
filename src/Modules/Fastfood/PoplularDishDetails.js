import React from 'react'
import { useParams } from 'react-router-dom'
import { Hotel } from '../Hotel/Hotel'

export const PoplularDishDetails = () => {

const {id} = useParams();

  return (
    <div>
      
      <Hotel  />

    </div>
  )
}
