import React,  { useContext }  from 'react';
import '../landingPage/LandingPage.css';
import'./auth.css'
import { Link } from 'react-router-dom';
import { useLogin } from "../hooks/useLogin";
import { UserContext } from "../userContext";
import { useForm } from "../hooks/useForm";

export const Login = ( ) => {
  let { usuari, setUsuari, authToken, setAuthToken } = useContext(UserContext);

  const  {doLogin} = useLogin();

  
  const { formState, onInputChange} = useForm({
    username: "",
    password: "",
  });

  const {username, password}=formState;
  
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
         <input
            name="username" // aquí cambia el atributo name a "username"
            type="text"
            placeholder="Email or username"
            className='inputAuth'
            id="username"
            onChange={onInputChange}
            value={username}
/><br />

      </div>
      
      <div className='camposAuth'>
        <label className='labelAuth' htmlFor="password">Password*:</label>
        <br />
        <input 

          type="password"
          placeholder="Password"
         className='inputAuth' 
         id="password"
         name="password"
         onChange={onInputChange} 

         value={password}
        /><br />
      </div>
      <div className='camposAuth'>
        <label className='labelAuth checkbox' for="cookies">¿Recordar usuario?</label>
        <input type="checkbox" id="cookies" name="cookies"></input>
    </div>
    <button 
            type='Submit'
            className='botonAuth'
            onClick={()=>{doLogin(formState)}}
            // onClick={ (e)=>console.log(e)}
            >
            Iniciar Sesion
    </button>
    </form>
    
    </div>
    </>
  )
}
