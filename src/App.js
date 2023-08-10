//import logo from './logo.svg';
import './App.css';
import Footer from './common/Footer';
import Header from './common/Header';
import Nav from './common/Nav';
//import Banner from './home/Banner';
//import Historia from './home/Historia';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Personajes from './pages/Personajes';
import Temporadas from './pages/Temporadas';
import Episodios from './pages/Episodios';
import Terror from './pages/Terror';
import Juegos from './pages/Juegos';
import DetallePersonaje from './pages/DetallePersonaje';
import Login from './pages/Login';

function App() {
  return (
    <>




      <BrowserRouter>
        <Header />
        <Nav />
        <main id='contenedor'>
          <Routes>
            <Route path='/' element={<Inicio />}></Route>


            <Route path='personajes' element={<Personajes />}></Route>
            <Route path='temporadas' element={<Temporadas />}></Route>
            <Route path='episodios' element={<Episodios />}></Route>
            <Route path='terror' element={<Terror />}></Route>
            <Route path='juegos' element={<Juegos />}></Route>
            <Route path='/detallepersonajes/:id' element={<DetallePersonaje />}></Route>
            <Route path='login' element={<Login />}></Route>











          </Routes>
        </main>
        <Footer />
      </BrowserRouter>


    </>

  );
}

export default App;
