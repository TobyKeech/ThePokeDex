import React, { useState, useEffect } from 'react';
import PokeList from '../Components/PokeList';
const PokemonContainer = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonData, setPokemonData] = useState([]);


    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
            .then(res => res.json())
            .then((data) => setPokemons(data.results))
    }, []);

    useEffect (() => {
       const pokemonPromises = pokemons.map((pokemon) => {
            return fetch (`${pokemon.url}`)
            .then(res => res.json());
        }); 

        Promise.all(pokemonPromises)
            .then((bannana) => setPokemonData(bannana));
        
        

    }, [pokemons]);


    return (
        <>
            <PokeList pokemonData={pokemonData} />
        </>
    );
}

export default PokemonContainer;