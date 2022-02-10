import React from 'react'

import './style.css'

const PokeCard = () => {
    return (
        <div className="container">
            <h1>Pokédex</h1>
            
            <div className="cardsList">
                <div className="cardContainer">  
                    <span>#001</span>
                    
                    <div className="infoCard">
                        <h2>Bulbassaur</h2>
                        <p>Grass</p>
                        <p>Poison</p>
                    </div>

                    <div className="imagesCard">
                        <img src="poke-color-gray.png" alt="Pokeball background"/>
                        <img src="pokeball.png" alt="Imagem do pokemon"/>
                    </div>

                </div>
            </div>    
        </div>            
    )
}

export default PokeCard