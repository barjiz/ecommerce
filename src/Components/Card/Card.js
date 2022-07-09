import React from 'react'

import "./Card.css"

export const Card = (props) => {

    return (

        <div style={{ width: props.width, flexDirection: props.flexDirection, margin: props.margin, padding: props.padding }} key={props.key} className='card'>
            {props.children}
        </div>

    )
}
