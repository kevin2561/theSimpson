import React from 'react'
import './Historia.css';
import slide1 from './../imagenes/autor.jpg';


export default function Historia() {
    return (
        <div id='historia' className='container'>
            <h1>Historia</h1>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={slide1} className="img-fluid rounded-start" alt="..." title=" Matt Groening"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body historia2">
                            <h5 className="card-title">Los Simpson</h5>
                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magnam inventore illo nisi officia officiis neque, dolorum delectus iusto modi nam eum rerum? Explicabo porro esse blanditiis tenetur minima. Velit eum veritatis praesentium quasi hic impedit? Provident temporibus doloribus voluptates tempora repellendus neque ratione quibusdam, quisquam architecto, optio, repudiandae corrupti quasi consequuntur incidunt eos dolorum nam vitae iusto laudantium. Molestias!</p>
                            <p className="card-text"><small className="text-muted">Autor: Matt Groening</small></p>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}
// style="max-width: 540px;