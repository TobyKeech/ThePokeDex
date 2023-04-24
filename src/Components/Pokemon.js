const Pokemon = ({ pokemon }) => {

   const handleClick = ((event) => {
    event.preventDefault()
    return(console.log("I love pokemon"))
        
    })

    return (
        <div className="pokemonWrapper">


            <form action="onClick"> <button onClick = {handleClick} >{pokemon?.sprites?.front_default ? <img className="imagePok" src={pokemon?.sprites?.front_default} /> : null} </button></form>
            <div> Name : {pokemon.name}</div>
            <div> Age : {pokemon.height}</div>
            <div> Abilitiy: {pokemon.abilities[0].ability.name}</div>
            <div> Move : {pokemon.moves[0].move.name}</div>
            <div> {pokemon.stats[0].stat.name} is {pokemon.stats[0].base_stat} </div>
            <div> {pokemon.stats[1].stat.name} is {pokemon.stats[1].base_stat} </div>
            <div> {pokemon.stats[2].stat.name} is {pokemon.stats[2].base_stat} </div>

            <hr></hr>

        </div>
    );
}

export default Pokemon;