import React from 'react'

import "./Icon.css"

export const IconRound = (props) => {
    return (
        <div className={`icon ${props.className}`} style={{ flex:props.flex, width: props.width, height: props.height, margin: props.margin, backgroundColor: props.backgroundColor, border: props.border }} onClick={props.onClick}>
            <a style={{ color: props.color }} href={props.link} className={props.icon}>{props.text}</a>
        </div>

    )
}




export const Icon = (props) => {
    return (
        <div className={`icon_round`} style={{
            margin: props.margin, fontSize: props.fontSize,
            backgroundColor: props.backgroundColor, border: props.border
        }} onClick={props.onClick}>
            <a style={{ color: props.color }} href={props.link} className={props.icon}>{props.text}</a>
        </div>

    )
}


