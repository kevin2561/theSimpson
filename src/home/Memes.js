import React, { useEffect, useState } from 'react'
import './Memes.css';


export default function Memes() {
    const [memes, setMemes] = useState([]);
    useEffect(() => {
        leerServicioMemes()
    }, [])

    const leerServicioMemes = async () => {
        const ruta = "https://paginasimpson.000webhostapp.com/memes.php";
        const response = await fetch(ruta);
        const data = await response.json();
        //console.log(data)
        setMemes(data)

    }
    return (
        <div id='memes' className='container padded' >
            <h1>Memes Clasico de los Simpson</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">



                {memes.map(item =>
                    <div className="col"key={item.id}>
                        <div className="card h-100" >
                            <img src={"https://paginasimpson.000webhostapp.com/memes/" + item.imagenmeme} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">{item.nombrememe}</h5>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
