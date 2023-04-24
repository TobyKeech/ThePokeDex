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


    // OTHER WAY OF DOING A FETCH USING AYSNC
    // const fetchPokemon =  aysnc() => {
        // const pokemonData = await fetch(url)
        // const allPokemons = await pokemonData.json()
        // setPokemons(allPokemons)
    // }


    useEffect(() => {
        const pokemonPromises = pokemons.map((pokemon) => {
            return fetch(`${pokemon.url}`)
                .then(res => res.json());
        });

        Promise.all(pokemonPromises)
            .then((data) => setPokemonData(data));
    }, [pokemons]);


    return (
        <>
            <PokeList pokemonData={pokemonData}/>
        </>
    );
}

export default PokemonContainer;