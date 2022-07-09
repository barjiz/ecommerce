import React from 'react'

import "./Flex.css"


export const Flex = (props) => {


    return (

        <div onClick={props.onClick} style={{
            transform: props.transform,
            transtion: props.transtion,
            border: props.border,
            boxShadow: props.boxShadow,
            borderBottom: props.borderBottom,
            top: props.top,
            left: props.left,
            bottom: props.bottom,
            right: props.right,
            borderBottom: props.borderBottom,
            padding: props.padding,
            position: props.position,
            height: props.height,
            width: props.width,
            flex: props.flex,
            flexWrap: props.flexWrap,
            margin: props.margin,
            flexDirection: props.flexDirection,
            justifyContent: props.justifyContent,
            backgroundColor: props.backgroundColor,
            justifyContent: props.justifyContent,
            alignItems: props.alignItems,
            overflowY: props.overflowY,
            overflowX: props.overflowX,
            borderRadius: props.borderRadius,
            zIndex: props.zIndex
        }} key={props.key} className={`${props.className} flex`}>
            {props.children}
        </div>

    )
}
