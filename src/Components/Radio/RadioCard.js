import React from 'react'

import { H4 } from "../Text/Text"

import "./RadioCard.css"

export const RadioCard = (props) => {
    return (

        <div className='radio_cards'>
            <label className="thelabel" >

                <input checked={props.checked} value={props.value} className="card_input_element"
                    type="radio" id={props.id} name="{props.name}" onChange={props.onChange} />

                <div className="card_input">{props.children}</div>

            </label>
        </div>
    )
}
