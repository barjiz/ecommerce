import React from 'react'

import "./Text.css"

export const H1 = (props) => {

    return (

        <h1 className='font_size h1' style={{

            flex: props.flex,
            textTransform: props.textTransform,
            color: props.color,
            padding: props.padding,
            margin: props.margin,
            textAlign: props.textAlign,
            maxWidth: props.maxWidth,
            maxHeight: props.maxHeight,
            fontWeight: props.fontWeight,

        }}>{props.children}</h1>

    )
}
export const H2 = (props) => {

    return (

        <h1 className='font_size h2' style={{

            flex: props.flex,
            textTransform: props.textTransform,
            color: props.color,
            padding: props.padding,
            margin: props.margin,
            textAlign: props.textAlign,
            maxWidth: props.maxWidth,
            maxHeight: props.maxHeight,
            fontWeight: props.fontWeight,

        }}>{props.children}</h1>

    )
}

export const H3 = (props) => {

    return (
        <h1 className='font_size h3' style={{

            flex: props.flex,
            textTransform: props.textTransform,
            color: props.color,
            padding: props.padding,
            margin: props.margin,
            textAlign: props.textAlign,
            maxWidth: props.maxWidth,
            maxHeight: props.maxHeight,
            fontWeight: props.fontWeight,

        }}>{props.children}</h1>

    )
}


export const H4 = (props) => {

    return (

        <h1 onClick={props.onClick} className='font_size h4' style={{
            width: props.width,
            backgroundColor: props.backgroundColor,
            borderRadius: props.borderRadius,
            flex: props.flex,
            textTransform: props.textTransform,
            color: props.color,
            padding: props.padding,
            margin: props.margin,
            textAlign: props.textAlign,
            maxWidth: props.maxWidth,
            maxHeight: props.maxHeight,
            fontWeight: props.fontWeight,

        }}>{props.children}</h1>

    )
}

export const H5 = (props) => {

    return (

        <h1 className='font_size h5' onClick={props.onClick} style={{
            flex: props.flex,
            textTransform: props.textTransform,
            color: props.color,
            padding: props.padding,
            margin: props.margin,
            textAlign: props.textAlign,
            maxWidth: props.maxWidth,
            maxHeight: props.maxHeight,
            fontWeight: props.fontWeight,

        }}>{props.children}</h1>
    )
}

export const H6 = (props) => {

    return (

        <h1 className='font_size h6' style={{

            flex: props.flex,
            textTransform: props.textTransform,
            color: props.color,
            padding: props.padding,
            margin: props.margin,
            textAlign: props.textAlign,
            maxWidth: props.maxWidth,
            maxHeight: props.maxHeight,
            fontWeight: props.fontWeight,

        }}>{props.children}</h1>

    )
}


export const H7 = (props) => {

    return (

        <h1 className='font_size h7' style={{

            flex: props.flex,
            textTransform: props.textTransform,
            color: props.color,
            padding: props.padding,
            margin: props.margin,
            textAlign: props.textAlign,
            maxWidth: props.maxWidth,
            maxHeight: props.maxHeight,
            fontWeight: props.fontWeight,

        }}>{props.children}</h1>
    )
}


