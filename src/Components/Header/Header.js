import React from 'react'

import "./Header.css"

export const Header = (props) => {

  return (

    <div style={{ backgroundColor: props.backgroundColor, position: props.position, justifyContent: props.justifyContent }} className='header'>{props.children}</div>
  )
}