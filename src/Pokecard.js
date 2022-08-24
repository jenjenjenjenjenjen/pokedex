

const Pokecard = ({poke}) => {
    return (
        <>
            <div className="Pokecard">
                <h4 className="Pokecard-name">{poke.name}</h4>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`} />
                <p>Type:{poke.type}</p>
                <p>EXP: {poke.base_experience}</p>
            </div>
        </>
    )
}

export default Pokecard;