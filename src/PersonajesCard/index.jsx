
export const PersonajesCard = ({personaje}) => {

    //si estoy concatenando, el parámetro que llamo del archivo .json no va entre llaves
    //const nameUrl = "https://swapi.dev/api/people/" + personaje.name
    return (

        <div className="col">
            <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top img-fluid" alt={personaje.name} src={personaje.img}/>
                <div className="card-body">
                    <p className="card-text">{personaje.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Ver</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Editar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}