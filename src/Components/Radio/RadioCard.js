import React from 'react'
import "./RadioCard.css"

export const RadioCard = (props) => {
    return (

        <label style={{ margin: props.margin }}  >

            <input checked={props.checked} className='card_input_element' type="radio" name="radio" id={props.id} onChange={props.onChange}
                defaultChecked={props.defaultChecked} value={props.value} />

            <div className="card_input">

                {props.children}

            </div>

        </label>

    )
}




// export const RadioCard = (props) => {
//     return (


//         <label className='card_input'>

//             <Flex width="100%" justifyContent="space-between" margin="10px 0">

//                 <Flex width="100%" margin="0 20px 0 30px" justifyContent="space-between">

//                     {props.children}

//                 </Flex>

//                 <input className='card_input_element' type="radio" name="radio" id={props.id} onChange={props.onChange}
//                     defaultChecked={props.defaultChecked} value={props.value} />

//             </Flex>

//         </label>

//     )
// }
