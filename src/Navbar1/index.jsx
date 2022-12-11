
function Navbar1 () {
    return (

        <div className="bg-dark" id="navbarHeader">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-7 py-4">
                        <h1 className="text-warning">STAR WARS - Personajes</h1>
                        <p className="text-muted">Bienvenid@ a un nuevo viaje dentro de la galaxia. Aquí podrás chequear algunos de los personajes más relevantes del universo STAR WARS. Descubrí sus características y dejá tu impronta. Que la fuerza te acompañe.</p>
                    </div>
                    <div className="col-sm-4 offset-md-1 py-4">
                        <h4 className="text-warning">Contacto</h4>
                        <ul className="list-group">
                            <li><a href="https://github.com/adriMemu" className="text-muted">Seguime en Github</a></li>
                            <li><a href="mailto: adriechague.cm@gmail.com" className="text-muted">Enviar correo</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar1;