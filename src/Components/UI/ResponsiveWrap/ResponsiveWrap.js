import React from 'react'

import "./ResponsiveWrap.css"

export const ResponsiveWrap = (props) => {
    return (

        <div className='responsive_wrap'>
            {props.children}
        </div>

    )
}
