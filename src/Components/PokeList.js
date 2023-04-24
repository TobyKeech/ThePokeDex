import Pokemon from "./Pokemon";


const PokeList = ({pokemonData}) => {

    const pokeList = pokemonData.map((pokemon, index) => {
        return <Pokemon pokemon={pokemon} key={index} />

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