import React from 'react'
import './header.css'

function Header(){
    return(
        <div className="header">
            <img className="banner" src="./header-pokedex.png" />
            <img className="logo" src="./pokeball.png"  />
        </div>
    )
}


export default Header