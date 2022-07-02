import React from 'react'

import { H4 } from "../Text/Text"
import { Flex } from '../UI/Flex/Flex'

import "./RadioCard.css"

export const RadioCard = (props) => {
    return (

        //     <label class="container">One
        //     <input type="radio" checked="checked" name="radio"/>
        //         <span class="checkmark"></span>
        // </label>


        <label className='the_label'>

            <Flex width="100%" justifyContent="space-between" margin="10px 0">

                <Flex width="100%" margin="0 20px 0 30px" justifyContent="space-between">

                    {props.children}

                </Flex>

                <label className="container">

                    <input type="radio" name="radio" id={props.id} onChange={props.onChange}
                        defaultChecked={props.defaultChecked} value={props.value} />
                    <span class="checkmark"></span>

                </label>


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
