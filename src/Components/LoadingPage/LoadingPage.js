import React from 'react'
import "./LoadingPage.css"

export const MainLoadingPage = () => {
    return (
        <div className='loading_page'>
            <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}


export const DetailLoadingPage = () => {
    return (
        <div className='detail_loading_page'>
            <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
