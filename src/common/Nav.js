import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';

export default function Nav() {
  const [nombre, setNombre] = useState("");
  const [aMaterno, setAMaterno] = useState("");
  const [aPaterno, setAPaterno] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [contraConfir, setContraConfir] = useState("");


  const crear = (event) => {
    event.preventDefault();

    //const ruta = "http://localhost/simpson/Cuenta.php";
    const ruta="https://paginasimpson.000webhostapp.com/Cuenta.php";
    let formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("aMaterno", aPaterno);
    formData.append("aPaterno", aMaterno);
    formData.append("correo", correo);
    formData.append("contraseña", contraseña);
    formData.append("contraConfir", contraConfir);

    fetch(ruta, {
      method: "POST",
      body: formData

    })
      .then(response => response.text())
      .then(result => {

        alert("USUARIO NÚMERO " + result + " BIENVENIDO " + nombre)
      })



  }
  //--------------------------------------------------------------CREAR CUENTA

  const crearCuenta = () => {
    return (
      <div className="modal fade" id="crearCuentModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-center" id="exampleModalLabel">Crear Cuenta</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <form className='container' onSubmit={(event) => crear(event)}>
              <div className="modal-body">
                <div className='mb-3'>
                  <input type="text" className='form-control' placeholder="Nombre"
                    value={nombre} required minLength="5"
                    onChange={(event) => setNombre(event.target.value)} />

                </div>

                <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Apellido Paterno'
                    value={aPaterno}
                    onChange={(event) => setAPaterno(event.target.value)} />
                </div>

                <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Apellido Materno'
                    value={aMaterno}
                    onChange={(event) => setAMaterno(event.target.value)} />
                </div>

                <div className='mb-3'>
                  <input type="email" className='form-control' placeholder=' Nuevo Correo'
                    value={correo}
                    onChange={(event) => setCorreo(event.target.value)} />
                </div>

                <div className='mb-3'>
                  <input type="password" className='form-control' placeholder='Contraseña'
                    value={contraseña}
                    onChange={(event) => setContraseña(event.target.value)} />
                </div>

                <div className='mb-3'>
                  <input type="password" className='form-control' placeholder='Confirmar Contraseña'
                    value={contraConfir}
                    onChange={(event) => setContraConfir(event.target.value)} />
                </div>



              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="submit" className="btn btn-primary">Crear</button>
              </div>
            </form>


          </div>
        </div>
      </div>
    )
  }





  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top  " data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href="/">Inicio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a className="nav-link" href="#historia">Historia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#evolucion">Evolución</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#memes">Memes</a>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"personajes"}>Personajes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"temporadas"}>Temporadas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"terror"}>Terror</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"juegos"}>Juegos</Link>
              </li>

            </ul>

            <ul className='navbar-nav  mb-2 mb-lg-0 usuario'>

              <li className='nav-link'> <i className="bi bi-person user" data-bs-toggle="modal" data-bs-target="#registroModal"></i></li>
              <li className='nav-link modo'> <i onClick={() => modoDark()} className="bi bi-brightness-high modoOscuro"></i></li>

            </ul>

          </div>
        </div>
      </nav>
      {dibujarRegistro()}
      {crearCuenta()}

    </>
  )
}

//--------------------------------------------------------------Modo Oscuro

const body = document.body

const modoDark = () => {

  let cambio = body.classList.toggle("oscuro");
  localStorage.setItem("modo", cambio);
}
let valor = localStorage.getItem("modo")

if (valor === "true") {
  body.classList.add("oscuro")
}
else {
  body.classList.remove("oscuro")
}





//--------------------------------------------------------------INICIA SESION



const dibujarRegistro = () => {
  return (
    <div className="modal fade" id="registroModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content container">
          <div className="modal-header">
            <h1 className="modal-title fs-5 " id="exampleModalLabel">Iniciar Sesión</h1>
          </div>

          <div className="modal-body">

            <div className='mb-3'>
              <input type="email" className='form-control' placeholder='Correo Electronico' />
            </div>

            <div className='mb-3'>
              <input type="password" className='form-control' placeholder='Contraseña' />
            </div>

          </div>
          <span className='crear-cuenta' data-bs-toggle="modal" data-bs-target="#crearCuentModal">Crear cuenta</span>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
          </div>
        </div>
      </div>
    </div>
  )
}


