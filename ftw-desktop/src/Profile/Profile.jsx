import React, { useState } from 'react';

import './Profile.css';
import { BsFillPencilFill } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';
import ProfileFotos from './ProfileFotos';
import ProfileDescription from './ProfileDescription';
import ProfileJuegos from './ProfileJuegos';
import ProfileHorario from './ProfileHorario';



const Profile = () => {
  const [showeditProfileClick, setShowEditProfileClick] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);
  const [showFotoProfileClick, setShowFotoProfileClick] = useState(true);
  const [showDescriptionProfileClick, setShowDescriptionProfileClick] = useState(false);
  const [showJuegosProfileClick, setShowJuegosProfileClick] = useState(false);
  const [showHorarioProfileClick, setShowHorarioProfileClick] = useState(false);



  const [showSpinner, setShowSpinner] = useState(false);



  const editProfileClick = () => {
    setShowEditProfileClick(true);
    // Aquí podrías agregar más lógica relacionada al like
  };
  const fotosProfileClick = () => {
    setSelectedMenuItem(0);
    setShowFotoProfileClick(true);
    setShowDescriptionProfileClick(false);
    setShowJuegosProfileClick(false);
    setShowHorarioProfileClick(false);

  };
  
  const descriptionProfileClick = () => {
    setSelectedMenuItem(1);
    setShowDescriptionProfileClick(true);
    setShowFotoProfileClick(false);
    setShowJuegosProfileClick(false);
    setShowHorarioProfileClick(false);

  };
  
  const JuegosProfileClick = () => {
    setSelectedMenuItem(2);
    setShowDescriptionProfileClick(false);
    setShowFotoProfileClick(false);
    setShowJuegosProfileClick(true);
    setShowHorarioProfileClick(false);

  };
  const horarioProfileClick = () => {
    setSelectedMenuItem(3);
    setShowDescriptionProfileClick(false);
    setShowFotoProfileClick(false);
    setShowJuegosProfileClick(false);
    setShowHorarioProfileClick(true);
  };
  
  const closeEditProfileClick = () => {
    setShowEditProfileClick(false);
    // Aquí podrías agregar más lógica relacionada al like
  };


  const handleSaveProfileClick = () => {
    setShowSpinner(true); // Mostrar el spinner
    setTimeout(() => {
      setShowSpinner(false); // Ocultar el spinner después de 3 segundos
      setShowEditProfileClick(false); // Ocultar el pop-up de edición
      // Mostrar un pop-up de confirmación
      alert("La información ha sido guardada correctamente.");
    }, 2000);
  };
  

  return (
    <div className="page-container"> 
      <div className='header_profile'>
        <div className='img_profile'>
          <img src="./img/img-user.jpg" alt="User avatar" />
        </div>
        <div className='info_perfil'>
          <div className='name_profile'>
            <h1 className="user_name_profile">John Doe</h1>
          </div>
          <div className='username_profile'>
            <p className="user_email_profile">@fhkdsjdj</p>
        </div>
        </div>
       <div className='acciones_profile'>
            <div className='edit_perfile' onClick={editProfileClick}>
                <BsFillPencilFill/>
            </div>

       </div>
      </div>
      <div className='MenuProfile'>
        <div className={`MenuItem ${selectedMenuItem === 0 ? "selected" : ""}`} onClick={fotosProfileClick}>
          <h3>Fotos</h3>
        </div>
        <div className={`MenuItem ${selectedMenuItem === 1 ? "selected" : ""}`} onClick={descriptionProfileClick}>
          <h3>Descripcion</h3>
        </div>
        <div className={`MenuItem ${selectedMenuItem === 2 ? "selected" : ""}`} onClick={JuegosProfileClick}>
          <h3>Juegos</h3>
        </div>
        <div className={`MenuItem ${selectedMenuItem === 3 ? "selected" : ""}`}onClick={horarioProfileClick}>
          <h3>Horarios</h3>
        </div>
      </div>
      {showFotoProfileClick && (
        <div className='ItemsMenu'>
          <ProfileFotos/>
        </div>
      )}
       {showDescriptionProfileClick && (
        <div className='ItemsMenu'>
          <ProfileDescription/>
        </div>
      )}
      {showJuegosProfileClick && (
        <div className='ItemsMenu'>
          <ProfileJuegos/>
        </div>
      )}
      {showHorarioProfileClick && (
        <div className='ItemsMenu'>
          <ProfileHorario    />
        </div>
      )}
      {showeditProfileClick && (
        <div>
          <div className="pop_up_profile">
            <div className='close_pop_up_profile'onClick={closeEditProfileClick}>
            <AiFillCloseCircle/>
            </div>
            <div className='form_edit_profile'>
                <h2>Edita tu Perfil</h2>
            <form action="">
                <div className='camposEditProfile'>
                  <label className='labelEditProfile' htmlFor="nombre">Nombre: </label>
                  <input className='inputEditProfile' type="text" id="nombre" name="nombre"  value='John Doe'/><br />
                </div>
                <div className='camposEditProfile'>
                  <label className='labelEditProfile' htmlFor="nombre">Email: </label>
                  <input className='inputEditProfile' type="email" id="nombre" name="nombre"  value='John@Doe.com'/><br />
                </div>
                
                <div className='camposEditProfile'>
                  <label className='labelEditProfile' htmlFor="nombre">Nombre de Usuario: @</label>
                  <input className='inputEditProfile' type="text" id="nombre" name="nombre"  value='fhkdsjdj'/><br />
                </div>               
              </form>
            </div>
            <div className='save_edit_profile' onClick={handleSaveProfileClick}>
                  Save
            </div>
            <div className="spinner-container">
            {showSpinner && <div className="spinner"></div>}
          </div>

          </div>
        </div>
      )}
    </div>
    
  )
}

export default Profile
