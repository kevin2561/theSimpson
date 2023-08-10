import React, { useEffect, useState } from 'react'
import Episodios from './Episodios';
import './Temporadas.css';


export default function Temporadas() {
    const [temporadas, setTemporadas] = useState([]);
    const [temSelecionada, settemSeleccionada] = useState([])
    const [carga, setCarga] = useState(true)


    useEffect(() => {
        leerServicio();
    }, [])

    const leerServicio = () => {
        //  const ruta = "http://localhost/simpson/temporadas.php";
        const ruta = "https://paginasimpson.000webhostapp.com/temporadas.php";
        fetch(ruta)
            .then(response => response.json())
            .then(data => {
                //console.log(data)
                setTemporadas(data);
                setCarga(false);
            });

    }
    const temporadaSelecionada = (event, item) => {
        settemSeleccionada(item)
        let itemLista = document.querySelectorAll("#listaTemporada li");
        itemLista.forEach(item => {
            item.classList.remove("list-group-item-dark")
        });
        event.currentTarget.classList.add("list-group-item-dark")

    }
    return (
        <section id='temporadas'>
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
            </div> :

                <div className='container'>
                    <h1>Temporadas</h1>
                    <div className='row'>
                        <div className="col-md-3">

                            <ul className="list-group" id='listaTemporada'>
                                {temporadas.map(item =>
                                    <li className="list-group-item" key={item.id}
                                        onClick={(event) => temporadaSelecionada(event, item)}>

                                        <h5>Temporada: <small>{item.temporada}</small></h5>


                                    </li>

                                )}
                            </ul>
                        </div>

                        <div className="col-md-9">
                            <h5>Temporada: <small className='dato1'>{temSelecionada.temporada}</small></h5>
                            <span>Episodios: <small className='dato'> {temSelecionada.episodios}</small></span><br></br>
                            <span>Estrenado: <small className='dato'>{temSelecionada.fechaemision}</small></span><br></br>
                            <span>Final de Temporada: <small className='dato'>{temSelecionada.finalemision}</small></span>
                            <Episodios categoriasEpisodios={temSelecionada.id} />

                        </div>

                    </div>
                </div>

            }

        </section >
    )
}
