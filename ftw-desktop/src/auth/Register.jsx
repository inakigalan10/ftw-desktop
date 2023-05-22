import React, { useEffect, useState } from 'react';
import '../landingPage/LandingPage.css';
import'./auth.css';
import { Link } from 'react-router-dom';
import { useRegister } from '../hooks/useRegister';

export const Register = ({ setLogin }) => {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirm, setPassword2] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [password2Error, setPassword2Error] = useState('');

  const { doRegister, registerError } = useRegister(); // Obtener registerError del hook useRegister

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('El email no es válido');
      return;
    }
    if (username.length < 2) {
      setUsernameError('El nombre de usuario debe tener al menos 2 caracteres');
      return;
    }
    if (password !== password_confirm) {
      setPassword2Error('Las contraseñas no coinciden');
      return;
    }
    if (!validatePassword(password)) {
      setPasswordError(
        'La contraseña debe tener al menos una letra y un número, y mínimo 8 caracteres'
      );
      return;
    }
    doRegister(username, email, password, password_confirm);
  };
  useEffect(() => {
    if (registerError) {
      alert(registerError);
    }
  }, [registerError]);

  return (
    <>
      <div className='Header'>
        <div>
          <h2>Logo</h2>
          <h1>FTW</h1>
        </div>
        <div className='botones-R'>
          <Link to={'/about'} className='item-Links'>
            About
          </Link>
          <Link to={'/contact'} className='item-Links'>
            Contacta
          </Link>
          <div>
            <button onClick={() => setLogin(true)} className='boton2 boton'>
              Inicia sesión
            </button>
          </div>
        </div>
      </div>
      <video autoPlay loop muted className='video-fondo'>
        <source
          src='/video/pexels-pixabay-854678-3840x2160-30fps.mp4'
          type='video/mp4'
        />
      </video>
      <div x-show='isLoginPage' className='recuadro'>
        <h1 className='titleAuth'>Crea tu cuenta</h1>
        <form action=''>
          <div className='camposAuth'>
            <label className='labelAuth' htmlFor='user'>
              Nombre de Usuario*:
            </label>
            <br />
            <input
              className='inputAuth'
              type='text'
              id='user'
              name='user'
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <br />
            {usernameError && <div className='error'>{usernameError}</div>}
          </div>

          <div className='camposAuth'>
            <label className='labelAuth' htmlFor='email'>
              Email*:
            </label>
            <br />
            <input
              className='inputAuth'
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={handleEmailChange}
              required
            />
            <br />
            {emailError && <div className='error'>{emailError}</div>}
          </div>

          <div className='camposAuth'>
            <label className='labelAuth' htmlFor='password'>
              Password*:
            </label>
            <br />
            <input
              className='inputAuth'
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <br />
            {passwordError && <span className='errorAuth'>{passwordError}</span>}
          </div>
          <div className='camposAuth'>
            <label className='labelAuth' htmlFor='password2'>
              Repite la Password*:
            </label>
            <br />
            <input
              className='inputAuth'
              type='password'
              id='password2'
              name='password2'
              value={password_confirm}
              onChange={(event) => setPassword2(event.target.value)}
              required
            />
            <br />
            {password2Error && <span className='errorAuth'>{password2Error}</span>}
          </div>

          <p>
            Al hacer clic en Registrarte, aceptas nuestras Condiciones. Obtén más
            información sobre cómo recogemos, usamos y compartimos tu información en
            la Política de privacidad, así como el uso que hacemos de las cookies y
            tecnologías similares en nuestra Política de cookies. Es posible que te
            enviemos notificaciones por SMS, que podrás desactivar cuando quieras.
          </p>
          {registerError && <div className='error'>{registerError}</div>}
          <button className='botonAuth' type='Submit' onClick={handleSubmit}>
            Crear usuario
          </button>
        </form>
      </div>
    </>
  );
};
