import React from 'react'

import "./Card.css"

export const Card = (props) => {

    return (

        <div style={{ flexDirection: props.flexDirection }} key={props.key} className='card'>
            {props.children}
        </div>

    )
}
