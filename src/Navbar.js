import React from "react"
import logo from "./assets/logo.svg"

export default function Navbar() {
    return(
        <nav>
            <img src={logo} alt="logo" />
            <h3>my travel journal.</h3>
        </nav> 
    )
}