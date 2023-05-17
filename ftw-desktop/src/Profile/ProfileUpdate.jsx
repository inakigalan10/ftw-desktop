import React, { useState } from 'react';
import { useEffect } from "react";
import { useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from './slice/thunks';
import { UserContext } from "../userContext";
import { FaPencilAlt } from 'react-icons/fa';


import './Profile.css';

export const ProfileUpdate = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
 
  const { pathname } = useLocation();
  const {authToken,setAuthToken,idUser,setIdUser,usernameUser, setUsernameUser} = useContext(UserContext);

  useEffect(() => {
    dispatch(getProfile(authToken, id));
  }, []);

  const { profile, isLoading, error, info } = useSelector(state => state.profile);
  console.log(profile);

  
  
  const [isHovered, setIsHovered] = useState(false);


    const handleImageChange = (e) => {
      if (id == idUser) {
        const file = e.target.files[0];
        setIsHovered(true);
        // Aquí puedes realizar las acciones necesarias con el archivo seleccionado
      } else {
        console.log('No tienes permiso para editar la foto');
      }
    };
  

  return (
    <>
      {profile && profile.user && profile.user.username ? (
        <div className="page-container-profile">
          <div className="header_profile">
          <div className={`imagen-profile ${isHovered ? 'hovered' : ''}`}>
            <label htmlFor="profile-image" className="image-label">
            <img src="../public/img/img-user.jpg" alt="User avatar" />
            
            {isHovered && <FaPencilAlt className="edit-icon" />}
            </label>
            <input
            type="file"
            id="profile-image-update"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
            />
          </div>

            <div className="name_profile">
              <h1 className="user_name_profile-profile">{profile.user.username}</h1>
            </div>
          </div>
          <div className='infos-perfil'>
            <div className="info-perfil">
              <h2>Description:</h2>
              <h3 className="description-profile">{profile.description}</h3>
            </div>
            <div className="info-perfil">
              <h2>Tipo de jugador:</h2>
              <h3 className="player_type-profile">{playerTypeMap[profile.player_type]}</h3>
            </div>
            <div className="info-perfil">
              <h2>Horari:</h2>
              <h3 className="play_schedule-profile">{getPlayScheduleLabel(profile.play_schedule)}</h3>
            </div>
            <div className="info-perfil">
              <h2>Tipos de juegos:</h2>
              <h3 className="genres-profile">{getGenresLabel(profile.genres[0])} {getGenresLabel(profile.genres[1])} {getGenresLabel(profile.genres[2])}</h3>
            </div>
            <div className="info-perfil">
              <h2>Idiomas:</h2>
              <h3 className="languages-profile"> {getLanguagesLabel(profile.languages[0])} {getLanguagesLabel(profile.languages[1])} {getLanguagesLabel(profile.languages[2])}</h3>
            </div>
            <div className="info-perfil">
              <h2>Pais:</h2>
              <h3 className="country-profile">{getCountryLabel(profile.country)}</h3>
            </div>
          </div>
        </div>
      ) : (
        <h1>No se encontró el perfil</h1>
      )}
    </>
  );
};
