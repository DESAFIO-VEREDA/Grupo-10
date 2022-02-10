import React from 'react'
import './header.css'

function Header(){
    return(
        <div className="header">
            <img className="banner" src="./header-pokedex.png" alt="banner"/>
            <img className="logo" src="./pokeball.png"  alt="logo"/>
        </div>
    )
}


export default Header