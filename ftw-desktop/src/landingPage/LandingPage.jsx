import React from 'react';;
import './LandingPage.css'
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <>
    <div className='Header'>
        
        <div>
            <h2>Logo</h2>
            <h1>FTW</h1>
        </div>
        <div className='botones-R'>
            <Link to={"/about"} className='item-Links'>
                ABOUT
            </Link>
            <Link to={"/contact"} className='item-Links'>
                Contacta 
            </Link>
                <div>
                    <Link to={"/register"} className='boton1 boton'>
                        Crea una cuenta 
                    </Link>
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
        <h1>¿Aún no tienes cuneta en FTW, A qué esperas?</h1>
        <Link to={"/register"} className='boton1 boton'>
                        Crea una cuenta 
                    </Link>
    </div>
    </>
  )
}

export default LandingPage