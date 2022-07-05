import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';

export const Grid = (props) => {

    return (

        <div className="container-fluid" style={{ padding: "10px" }}>
            <div className="row">

                {props.children}

            </div>

        </div>

    )
}