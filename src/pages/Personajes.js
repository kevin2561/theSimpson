import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import slide from './../imagenes/suicide.jpg';
import noImagen from './../imagenes/no.jpg';

import './Personajes.css';


export default function Personajes() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [cargando, setCargando] = useState(true)

    //const url = "http://localhost/simpson/personajes.php"
    const url = "https://paginasimpson.000webhostapp.com/personajes.php";
    const showData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setUsers(data)
        setCargando(false)


    }
    const searcher = (e) => {
        setSearch(e.target.value)
    }
    let result = []
    if (!search) {
        result = users

    } else {
        result = users.filter((dato) =>
            dato.nombre.toLowerCase().includes(search.toLocaleLowerCase()))
    }
    //  const result = search ? users : users.filter((dato) => dato.nombre.toLowerCase().includes(search.toLocaleLowerCase()))


    useEffect(() => {
        showData()


    }, [])




    const cardPersonajes = () => {
        return (
            <div className="row row-cols-1 row-cols-md-3 g-4">

                {result.sort((a, b) => a.nombre.toLowerCase() > b.nombre.toLowerCase() ? 1 : -1, 0)
                    .map(item =>
                        <div className="col" key={item.id}>
                            <div className="card h-100">
                                <img id='modalPersonaje' src={item.imgchica === "" ? noImagen
                                    : "https://paginasimpson.000webhostapp.com/personajeChico/" + item.imgchica} className="card-img-top" alt="imagen Simpson" title={item.nombre} />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Nombre: {item.nombre}</h5>
                                    <Link to={"/detallepersonajes/" + item.id}>
                                        <button className='btn btn-primary buscar'>Ver más</button>
                                    </Link>
                                </div>
                            </div>
                        </div>


                    )
                }




            </div>

        )
    }

    return (
        <section id='personajes'>
            {cargando ? <div className="sk-circle">
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
                    <h1>Personajes</h1>

                    <input value={search} onChange={searcher} type="text" placeholder='Buscar Personaje' className='form-control buscador' />

                    {result === null || result.length === 0 ? <div id='no-Encontrado'><h1 className='text-center'>Personaje no Encontrado </h1> <img src={slide} alt="" /></div> : cardPersonajes()}
                </div>
            }
        </section>
    )
}
