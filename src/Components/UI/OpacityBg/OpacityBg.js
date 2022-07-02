import React from 'react'

import "./OpacityBg.css"

export const OpacityBg = (props) => {
    return (

        <div onClick={props.onClick} style={props.style} className='opacity_bg'>
            {props.children}
        </div>
    )
}
