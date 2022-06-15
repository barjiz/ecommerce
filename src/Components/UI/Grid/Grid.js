import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';

export const Grid = (props) => {

    return (

        <div className="container-fluid">
            <div className="row">

                {props.children}

            </div>

        </div>

    )
}