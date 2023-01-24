function Character({character}) {
    return (
        <div className="card text-center bg-info" >
        <h3 className="text-black">{character.name} </h3>
        <img className="img-fluid rounded-pill"src={character.image} alt={character.name}/>
        <h3 className="text-black">{character.species}</h3>
        <h3 className="text-black">{character.gender}</h3>
        </div>
    );
}

export default Character