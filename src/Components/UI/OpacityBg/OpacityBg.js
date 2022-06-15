import React from 'react'

import "./OpacityBg.css"

export const OpacityBg = (props) => {
    return (

        <div style={props.style} className='opacity_bg'>
            {props.children}
        </div>
    )
}
