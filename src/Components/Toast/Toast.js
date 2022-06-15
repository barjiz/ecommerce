import React from 'react'

export const Toast = (props) => {
    return (
        <div class={`toast align-items-center text-bg-primary border-0 fade ${props.showToast}`} role="alert" aria-live="asdsertive" aria-atomic="false">
            <div class="d-flex">
                <div class="toast-body">
                    {props.message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    )
}
