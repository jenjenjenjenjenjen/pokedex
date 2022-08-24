import Pokecard from "./Pokecard";

const Pokedex = (props) => {
    return (
        <>
        {props.pokes.map(p => <Pokecard poke={p} />)}
        </>
    )
}

export default Pokedex;