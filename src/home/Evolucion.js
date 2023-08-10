import React from 'react'
import slide1 from './../imagenes/season1.jpg';
import slide2 from './../imagenes/season2.jpg';
import slide3 from './../imagenes/season3.jpg';
import slide4 from './../imagenes/season4.jpg';

import './Evolucion.css';



export default function Evolucion() {
    return (
        <div id='evolucion' className='container'>
            <h1>Evolución de los Simpson</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card">
                        <img src={slide1} className="card-img-top" alt="..."  title='Los Simpson en 1987'/>
                        <div className="card-body">
                            <h5 className="card-title">1987</h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, officiis tempora.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={slide2} className="card-img-top" alt="..."  title='Los Simpson en 1989'/>
                        <div className="card-body">
                            <h5 className="card-title">1989</h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, tenetur enim!</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={slide3} className="card-img-top" alt="..."title='Los Simpson en 2003' />
                        <div className="card-body">
                            <h5 className="card-title">2003</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ducimus quisquam illo.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={slide4} className="card-img-top" alt="..." title='Los Simpson en 2022' />
                        <div className="card-body">
                            <h5 className="card-title">2022</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, facere in?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
