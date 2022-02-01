import { useState } from "react";
import { API } from "../api/Api";

const usePokemons = async( ) => {

    const [infoCard, setInfoCard] = useState([]);
        
    try{
        
        const general = await fetch(API)
        const resAllPokemon = await general.json();
        
        /* Destructuracion para hacer el fetch a la url de cada pokemon */
        const {results} = resAllPokemon;
        
        /* Generar la informacion de la card */
        const card = results.map( async (res) =>{
            
            const dataPokemon = await fetch(res.url);
            const resDataPokemon = await dataPokemon.json();

            const species = await fetch(resDataPokemon.species.url);
            const pokSpecies = await species.json();

            const {id, name, stats, types, sprites} = resDataPokemon;
            
            return{
                id:id,
                legendary:pokSpecies.is_legendary,
                name:name,
                sprites:sprites.other.dream_world.front_default,
                stats:stats,
                types:types
            }
            
        })
        
        /* Transformar el array de promesas en un array de promesas resueltas */
        Promise.all( card ).then( data => {
            setInfoCard(data)
        })

    } catch(error){
        console.error('error', error)
    }

    return infoCard;
    
};