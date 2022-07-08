import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { H3 } from '../Text/Text'

import "./Header.css"

export const Header = (props) => {


  return (

    <div style={{
      backgroundColor: props.backgroundColor,
      position: props.position, justifyContent: props.justifyContent
    }}

      className='header'>

      <i onClick={props.back} class="fa-solid fa-arrow-left"></i>

      <H3 fontSize="1.5rem" fontWeight="bold" >{props.title}</H3>

      <i style={{ color: 'white' }} class="fa-solid fa-chevron-left"></i>

    </div >
  )
}