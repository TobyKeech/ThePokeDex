import Pokemon from "./Pokemon";


const PokeList = ({pokemonData}) => {

    const pokeList = pokemonData.map((pokemon) => {
        return <Pokemon pokemon={pokemon} />

    });

    return ( 
    <>
    <div className="pokeListContainer">
        {pokeList}
    </div>

    </> 
    );
}
 
export default PokeList;