import React, { useState } from 'react';
import { PokedexGrid } from './PokedexGrid';

export const PokedexScreen = () => {

    const [pokemon, setPokemon] = useState(['']);
    
    return (
        <div className='container'>

                {
                    pokemon.map( pok => (
                        <PokedexGrid 
                            key={pok}
                            id={pok} 
                        />
                    ))
                }
        </div>
    )
};
