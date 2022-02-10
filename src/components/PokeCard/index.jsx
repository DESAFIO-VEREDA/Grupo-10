import React, {useEffect, useState} from 'react'
import axios from 'axios'

import './style.css'

const PokeCard = () => {
    const [pokemons, setPokemons] = useState([])
    
    useEffect(()=>{
        async function fetchData(){
            const { data } = await axios.get(' https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100')
            const results = data.results
            results.map(async(pokemon) =>{
                const {data} = await axios.get(pokemon.url)
                pokemons.push(data)
            })
        }
        fetchData()
    }, [])

    
    return (
        <div className="container">
            <h1>Pokédex</h1>
            {!pokemons ? <div></div> : pokemons.map(pokemon => (
             
            <div className="cardsList">
                <div className="cardContainer">  
                    <span>#001</span>
                
                    <div className="infoCard">
                        <h2>{pokemon.name}</h2>
                        <p>{pokemon.types[0].type.name}</p>
                    </div>

                    <div className="imagesCard">
                        <img src={pokemon.sprites.front_default} alt="Pokeball background"/>
                        <img src="pokeball.png" alt="Imagem do pokemon"/>
                    </div>

                </div>
            </div> 
            ))
            }   
        </div>            
    )
}

export default PokeCard