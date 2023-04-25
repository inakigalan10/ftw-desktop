import React from 'react';
import '../landingPage/LandingPage.css';
import'./auth.css'
import { Link } from 'react-router-dom';

const Register = () => {
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
                    <Link to={"/login"} className='boton2 boton'>
                        Inicia seseion 
                    </Link>
                </div>
        </div>
    </div>
    <video autoPlay loop muted className='video-fondo'>
        <source src='/video/pexels-pixabay-854678-3840x2160-30fps.mp4' type='video/mp4' />
    </video>
    <div className='recuadro'>
      <h1 className='titleAuth'>Crea tu cuenta</h1>
    <form action="">
      <div className='camposAuth'>
        <label className='labelAuth' htmlFor="user">Nombre de Usuario*:</label>
         <br />
        <input className='inputAuth' type="text" id="user" name="user" required/><br />
      </div>
      
      <div className='camposAuth'>
        <label className='labelAuth' htmlFor="email">Email*:</label>
        <br />
        <input className='inputAuth' type="email" id="email" name="email" required/><br />
      </div>
      <div className='camposAuth'>
        <label className='labelAuth' htmlFor="password">Password*:</label>
        <br />
        <input className='inputAuth' type="password" id="password" name="password" required/><br />
      </div>
      <div className='camposAuth'>
        <label className='labelAuth' for="fecha">Fecha de nacimiento*:</label>
        <br />
        <input className='inputAuth' type="date" id="fecha" name="fecha"/>
      </div>
      <div className='camposAuth'>
        <label className='labelAuth' for="telefono">Telefono:</label>
        <br />
        <input className='inputAuth' type="number" id="telefono" name="telefono"/>
      </div>
      <div>
          <label  className='labelAuth'for="genero">Género:</label> <br />
          <select  className='inputAuth' id="genero" name="genero">
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
      </div>
      <p>Al hacer clic en Registrarte, aceptas nuestras Condiciones. 
        Obtén más información sobre cómo recogemos, usamos y compartimos 
        tu información en la Política de privacidad, así como el uso que hacemos
        de las cookies y tecnologías similares en nuestra Política de cookies.
        Es posible que te enviemos notificaciones por SMS, que podrás desactivar cuando quieras.</p>  
    </form>
    <button className='botonAuth'>
            Crear usuario
    </button>
    </div>
    </>
  )
}

export default Register