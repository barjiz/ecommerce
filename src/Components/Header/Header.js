import React from 'react'
import { useNavigate } from 'react-router-dom'
import { H3 } from '../Text/Text'

import "./Header.css"

export const Header = (props) => {


  const navigate = useNavigate()

  return (

    <div style={{
      backgroundColor: props.backgroundColor,
      position: props.position, justifyContent: props.justifyContent
    }}

      className='header'>

      {props.children}


      {props.icon ?
        <i onClick={() => navigate(`/${props.navigate}`)} class="fa-solid fa-chevron-left"></i>

        :

        <i style={{ color: 'white' }} class="fa-solid fa-chevron-left"></i>

      }

      <H3 fontWeight="bold" >{props.title}</H3>

      <i style={{ color: 'white' }} class="fa-solid fa-chevron-left"></i>


    </div >
  )
}