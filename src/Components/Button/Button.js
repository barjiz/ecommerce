import React from 'react'

import "./Button.css"



export const Button = (props) => {


    const AllProperties = {
        width: props.width,
        padding: props.padding,
        margin: props.margin,
        position: props.position,
        top: props.top,
        left: props.left,
        bottom: props.bottom,
        padding: props.padding
    }


    return (
        <button

            style={AllProperties}

            onClick={props.onClick} className={`button ${props.color}`}>{props.children}</button>
    )
}