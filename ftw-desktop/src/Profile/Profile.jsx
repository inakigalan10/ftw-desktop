import React, { useState } from 'react';

import './Profile.css';
import { BsFillPencilFill } from 'react-icons/bs';


const Profile = () => {
  const [showeditProfileClick, seteShowditProfileClick] = useState(false);

  const editProfileClick = () => {
    seteShowditProfileClick(true);
    // Aquí podrías agregar más lógica relacionada al like
  };
  return (
    <div> 
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
      {showeditProfileClick && (
        <div>
          <div className="pop-up-profile">
            Té ha gustado el perfil 
            ¿Habra suerte?
          
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile