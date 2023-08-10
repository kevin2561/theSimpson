import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
//import noimg from './../imagenes/no.jpg';
import './DetallePersonaje.css';


export default function DetallePersonaje() {

    const [detalle, setDetalle] = useState([]);
    let params = useParams();

    useEffect(() => {
        leerService();
    }, []);

    const leerService = () => {
       // const ruta = "http://localhost/simpson/personajeID.php?id=" + params.id;
       const ruta="https://paginasimpson.000webhostapp.com/personajeID.php?id=" + params.id;
        fetch(ruta)
            .then(response => response.json())
            .then(data => {
                // console.log(data[0])
                setDetalle(data[0]);
            })
    }


    //------------------------------------VENTANA MODAL
    const modalDetallePersonaje = () => {
        return (
            <div className="modal fade" id="detalleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                            <div className="modal-body">
                                <img src={"https://paginasimpson.000webhostapp.com/personajes/" + detalle.imagen} className="card-img-top" alt="" title={detalle.nombre} />

                            </div>
                    
                     
                    </div>
                </div>
            </div>


        )
    }










    return (
        <>
            <section id='detalle' className='container'>


                <div className="row">
                    <div className="col-md caja">
                        <img src={"https://paginasimpson.000webhostapp.com/personajes/" + detalle.imagen} className="card-img-top" alt="" title={detalle.nombre}  data-bs-toggle="modal" data-bs-target="#detalleModal" />
                    </div>
                    <div className="col-md">
                        <h2>{detalle.nombre}</h2>
                        <table className="table">
                            <tbody>

                                <tr><th>Edad </th><td>{detalle.edad === "" ? "desconocido" : detalle.edad + " años"} </td></tr>
                                <tr><th>Voz Original </th><td>{detalle.original === "" ? "No encontrado" : detalle.original}</td></tr>

                                <tr><th>Voz Latino </th><td>{detalle.latino === "" ? "No encontrado" : detalle.latino}</td></tr>


                                <tr><th>Descripcion</th><td>{detalle.descripcion === ""
                                    ? <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, laborum, maiores laudantium id, quas harum nemo nam doloribus blanditiis illum porro deserunt eos non ducimus distinctio sunt quis! Sunt similique fugiat eius? Nostrum a quam deleniti iure sed debitis quas, pariatur officia libero incidunt vitae rem labore obcaecati optio sunt!</p>
                                    : detalle.descripcion}</td></tr>


                            </tbody>
                        </table>
                    </div>
                </div>



            </section>
            {modalDetallePersonaje()}

        </>
    )
}


