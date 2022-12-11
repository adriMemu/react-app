import { PersonajesCard } from '../PersonajesCard'
import personajes from '../personajes.json'


// PersonajesGrid recorre el archivo .json y dentro de un <div> pasa un componente (PersonajesCard)
// el recorrido de ese archivo .json es pasado como parámetro al componente PersonajesCard
// entonces, dentro del <div> voy a tener todas las cards del recorrido
export const PersonajesGrid = () => {
    return (
        <section>
            <div className="album">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 m-3">

                    {personajes.map((personaje)=>(
                //al crear un componente partiendo de un archivo .json, debo llamar un key
                //el key suele ser por convención el id de cada objeto
                //este key permitirá que se ejecute el .map que estoy utilizando

                <PersonajesCard key={personaje.id} personaje={personaje}/>

                    ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

