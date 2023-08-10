import React from 'react'
import slide1 from './../imagenes/rosca.jpg';

import './Footer.css';


export default function Footer() {
  return (
    <div id='footer' className=''>
      <div className='row'>

        <div className='col-md-4'>

          <div className=" caja1">
            <img src={slide1} alt="" />
          </div>

        </div>

        <div className='col-md-4 material' >
          <h6>Pagina Web creada con React</h6>
          <h6>Framework Bootstrap 5</h6>
          <h6>BS MYSQUL</h6>

          <h6>© Copyright -2023 </h6>


        </div>
        <div className='col-md-4 redes'>
          <ul>
            <li><i className="bi bi-facebook"></i> <span>Kevin Noa Romero</span></li>
            <li><i className="bi bi-envelope"></i> <span>kevinnoa02@gmail.com</span></li>
            <li><i className="bi bi-whatsapp"></i> <span>949-727-903</span></li>
        

          </ul>


        </div>



      </div>

    </div>
  )
}
