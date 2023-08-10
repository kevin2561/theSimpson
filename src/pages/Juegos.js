import React, { useEffect, useState } from 'react'
import './Juegos.css';

export default function Juegos() {
    const [juego, setJuego] = useState([]);

    useEffect(() => {
        leerServicio();


    }, [])
    const leerServicio = () => {
        //const ruta = "http://localhost/simpson/juego.php";
        const ruta="https://paginasimpson.000webhostapp.com/juego.php";
        fetch(ruta)
            .then(response => response.json())
            .then(data => {
                //  console.log(data)
                setJuego(data)
             

            })
    }



    //quokka.js
    const carrusel = () => {
        return (
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {juego.map(item =>
                    <div className="col" key={item.id}>
                        <div className="card h-100" >
                            <img src={"https://paginasimpson.000webhostapp.com/juegos/"+ item.imagen} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.nombre}</h5>
                                <p className="card-text">{item.descripcion}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Plataformas: {item.plataformas}</small>
                            </div>

                        </div>
                    </div>
                )}

            </div>

        )
    };







    return (
        <section id='juegos'>
            <div className='container'>
                <h1> Juegos</h1>
                {carrusel()}
            </div>

        </section>
    )
}
