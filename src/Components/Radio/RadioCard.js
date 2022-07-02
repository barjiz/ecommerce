import React from 'react'

import { H4 } from "../Text/Text"
import { Flex } from '../UI/Flex/Flex'

import "./RadioCard.css"

export const RadioCard = (props) => {
    return (

        <label >

            <Flex width="100%" justifyContent="space-between" margin="10px 0">

                <Flex margin="0 30px" justifyContent="start" >

                    {props.children}

                </Flex>

                <Flex margin="0 30px" justifyContent="end">

                    <input className='radio_input' checked={props.checked} value={props.value}
                        type="radio" id={props.id} name="{props.name}" onChange={props.onChange} />

                </Flex>


            </Flex>

        </label>

    )
}



// import React from 'react'

// import { H4 } from "../Text/Text"

// import "./RadioCard.css"

// export const RadioCard = (props) => {
//     return (

//         <div className='radio_cards'>
//             <label className="thelabel" >

//                 <input checked={props.checked} value={props.value} className="card_input_element"
//                     type="radio" id={props.id} name="{props.name}" onChange={props.onChange} />

//                 <div className="card_input">{props.children}</div>

//             </label>
//         </div>
//     )
// }
