import React from 'react'

function Accordion(props) {
    return (
        <div class="accordion accordion-flush" id="accordionFlushExample" >
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseOne${props.id}`} aria-expanded="false" aria-controls="flush-collapseOne">
                        {props.question}
                    </button>
                </h2>
                <div id={`flush-collapseOne${props.id}`} class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        {props.answer}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion