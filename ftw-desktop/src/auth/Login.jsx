import React,  { useContext }  from 'react';
import '../landingPage/LandingPage.css';
import'./auth.css'
import { Link } from 'react-router-dom';
import { useLogin } from "../hooks/useLogin";
import { UserContext } from "../userContext";
import { useForm } from "react-hook-form";

export const Login = ( ) => {
  let { usuari, setUsuari, authToken, setAuthToken } = useContext(UserContext);

  const { register, handleSubmit } = useForm();
  const  {doLogin} = useLogin();

  const onSubmit = data => console.log(data)
  //doLogin(data)

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
        <input {...register("email", { required:true })}
            // name="email"
            type="text"
            // value={email}
            placeholder="Email or username"
            className='inputAuth'
             id="nombre"
            /><br />
      </div>
      
      <div className='camposAuth'>
        <label className='labelAuth' htmlFor="password">Password*:</label>
        <br />
        <input 
        {...register("password", { 
            
          required: "Aquest camp és obligatori",
          minLength: {
            value: 8,
            message: "La contrasenya ha de tenir al menys 8 caràcters"
          },
          maxLength: {
            value: 20,
            message: "La contrasenya ha de tenir com a màxim 20 caràcters"

          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
            message:
              "La contrasenya ha de contenir al menys una minúscula, una majúscula, i un número"
          }
           })}
          // name="password"
          type="password"
          // value={password}
          placeholder="Password"
        className='inputAuth' 
         id="password" 
        /><br />
      </div>
      <div className='camposAuth'>
        <label className='labelAuth checkbox' for="cookies">¿Recordar usuario?</label>
        <input type="checkbox" id="cookies" name="cookies"></input>
    </div>
    </form>
    <button 
            className='botonAuth'
            onClick ={ handleSubmit(onSubmit)}  
            // onClick={ (e)=>console.log(e)}
            >
            Iniciar Sesion
    </button>
    </div>
    </>
  )
}
