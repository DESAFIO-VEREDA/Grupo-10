import React from 'react'

import './style.css'

const PokeCard = () => {
    return (
        <div className="container">
            <h1>Pokédex</h1>
            
            <div className="cardsList">
                <div className="cardContainer">  
                    
                    
                    <div className="infoCard">
                        <h2>Bulbassaur</h2>
                        <p>Grass</p>
                        <p>Poison</p>
                    </div>

                    <div className="imagesCard">
                        <img src="poke-color-gray.png" alt="Pokeball background" id='pokelogo'/>
                        <img src="pokeball.png" alt="Imagem do pokemon"/>
                    </div>

                </div>

                
            </div>    
        </div>            
    )
}

export default PokeCard