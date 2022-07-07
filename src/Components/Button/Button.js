import React from 'react'

import "./Button.css"



export const Button = (props) => {


    const AllProperties = {
        width: props.width,
        height: props.height,
        padding: props.padding,
        margin: props.margin,
        position: props.position,
        top: props.top,
        left: props.left,
        bottom: props.bottom,
        padding: props.padding,
        borderRadius: props.borderRadius,
        fontSize: props.fontSize
    }


    return (
        <button

            style={AllProperties}

            onClick={props.onClick} className={`button ${props.color}`}>{props.children}</button>
    )
}


export const ButtonText = (props) => {


    const AllProperties = {
        width: props.width,
        padding: props.padding,
        margin: props.margin,
        position: props.position,
        top: props.top,
        left: props.left,
        bottom: props.bottom,
        padding: props.padding,
        borderRadius: props.borderRadius,
    }


    return (
        <h4

            style={AllProperties}

            onClick={props.onClick} className={`button ${props.color}`}>{props.children}</h4>
    )
}