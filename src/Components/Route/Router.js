import React from 'react'
import { Link } from 'react-router-dom'

export const Navigator = (props) => {

    return (
        <Link style={{
            textDecoration: 'none', color: "inherit",
            flexDirection: "column",
            // display: "flex", justifyContent: "center", alignItems: "center"
        }} to={`${props.route}`}>
            {props.children}
        </Link>
    )

}