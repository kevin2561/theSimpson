import React, { useEffect, useState } from 'react'
//import { useParams } from 'react-router-dom';
import './Terror.css';


export default function Terror() {
    const [terror, setTerror] = useState([]);
    const [carga, setCarga] = useState(true);


    useEffect(() => {
        leerServicio();


    }, [])

    const leerServicio = async () => {
        // const ruta = "http://localhost/simpson/terror.php" ;
        const ruta = "https://paginasimpson.000webhostapp.com/terror.php";
        const response = await fetch(ruta);
        const data = await response.json();
        // console.log(data)
        setTerror(data)
        setCarga(false)



    }



    const cardTerr = () => {
        return (

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {terror.map(item =>
                    <div className="col" key={item.id}>
                        <div className="card">
                            <img src={"https://paginasimpson.000webhostapp.com/terror/" + item.imagen} className="card-img-top" alt="..." title={item.nombre} />
                            <div className="card-body">
                                <h3 className="card-title text-center terrorNombre">{item.nombre}</h3>
                                <p className="h4 card-text">{item.temporada}</p>
                                <span>{item.descripcon}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }







    return (
        <>
            <section id='terror'>
                <div className='container'>
                    <h1>La Casita del Horror</h1>
                    {carga ? <div className="sk-circle">
                        <div className="sk-circle1 sk-child"></div>
                        <div className="sk-circle2 sk-child"></div>
                        <div className="sk-circle3 sk-child"></div>
                        <div className="sk-circle4 sk-child"></div>
                        <div className="sk-circle5 sk-child"></div>
                        <div className="sk-circle6 sk-child"></div>
                        <div className="sk-circle7 sk-child"></div>
                        <div className="sk-circle8 sk-child"></div>
                        <div className="sk-circle9 sk-child"></div>
                        <div className="sk-circle10 sk-child"></div>
                        <div className="sk-circle11 sk-child"></div>
                        <div className="sk-circle12 sk-child"></div>
                    </div>
                        : cardTerr()}





                </div>




            </section>

        </>
    )
}
