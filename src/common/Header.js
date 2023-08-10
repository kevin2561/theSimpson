import React from 'react'
import './Header.css';
import img from '.././imagenes/titulo.png'


export default function Header() {
  return (
    <section id='Header' className='container'>

      <div className=' row'>

        <div className='col'>
          <a href="/"> <img src={img} alt="" /></a>

        </div>


        <div className='col'>
        </div>

      </div>




    </section>
  )
}
