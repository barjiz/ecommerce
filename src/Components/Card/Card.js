import React from 'react'

import "./Card.css"

export const Card = (props) => {

    return (

        <div style={{ flexDirection: props.flexDirection, margin: props.margin, padding: props.padding }} key={props.key} className='card'>
            {props.children}
        </div>

    )
}
