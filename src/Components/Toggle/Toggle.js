import React from 'react'

import "./Toggle.css"

export const Toggle = (props) => {
    return (
        <div className='toggle'>
            <input checked={props.checked} defaultChecked={props.defaultChecked} onClick={props.onClick} type="checkbox" id={props.id} /><label for={props.id}>Toggle</label>
        </div>

    )
}
