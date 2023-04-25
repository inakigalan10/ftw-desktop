import React from 'react';
import '../landingPage/LandingPage.css';
import'./auth.css'
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <>
        <div className='Header'>
        
        <div>
            <h2>Logo</h2>
            <h1>FTW</h1>
        </div>
        <div className='botones-R'>
            <Link to={"/about"} className='item-Links'>
                About
            </Link>
            <Link to={"/contact"} className='item-Links'>
                Contacta 
            </Link>
                <div>
                <Link to={"/register"} className='boton2 boton'>
                        Crea una cuenta 
                    </Link>
                </div>
        </div>
    </div>
    <video autoPlay loop muted className='video-fondo'>
        <source src='/video/pexels-pixabay-854678-3840x2160-30fps.mp4' type='video/mp4' />
    </video>
    <div className='recuadro login'>
      <h1 className='titleAuth'>Inicia Sesion</h1>
    <form action="">
      <div className='camposAuth'>
        <label className='labelAuth' htmlFor="nombre">Usuario*:</label>
         <br />
        <input className='inputAuth' type="text" id="nombre" name="nombre" required/><br />
      </div>
      
      <div className='camposAuth'>
        <label className='labelAuth' htmlFor="password">Password*:</label>
        <br />
        <input className='inputAuth' type="password" id="password" name="password" required/><br />
      </div>
      <div className='camposAuth'>
        <label className='labelAuth checkbox' for="cookies">¿Recordar usuario?</label>
        <input type="checkbox" id="cookies" name="cookies"></input>
    </div>
    </form>
    <button className='botonAuth'>
            Iniciar Sesion
    </button>
    </div>
    </>
  )
}
