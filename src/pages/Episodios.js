import React, { useEffect, useState } from 'react'
import './Episodios.css';


export default function Episodios(props) {
    const [episodio, setEpisodio] = useState([]);


    useEffect(() => {
        leerServicio(props.categoriasEpisodios);
    }, [props.categoriasEpisodios]);

    const leerServicio = async (idseason) => {

        //   const ruta = "http://localhost/simpson/seasonId.php?idseason=" + idseason;
        const ruta="https://paginasimpson.000webhostapp.com/seasonId.php?idseason=" + idseason;
        const response = await fetch(ruta);
        const data = await response.json();
        setEpisodio(data);
    }

    const tabla = () => {
        return (
            <table id='tabla' className='table  align-middle  container'>

                <thead>
                    <tr className='text-center'>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Episodio</th>
                        <th >Descripcion</th>

                    </tr>
                </thead>
                <tbody>
                    {episodio.map(item =>

                        <tr key={item.id}>
                            <td><img className='img' src={"https://paginasimpson.000webhostapp.com/personajes/" + item.imagen} /></td>
                            <td className=''>{item.nombre}</td>
                            <td className='text-center'>{item.episodio}</td>
                            <td className='text-left'>{item.descripcion}</td>

                        </tr>
                    )}
                </tbody>

            </table>

        )
    }

    return (
        <div id='episodios' className='container'>
            {episodio === null || episodio.length === 0

                ? <h1 className='selecTem'>Seleccione una Temporada</h1>
                : tabla()
            }
        </div>


    )
}
