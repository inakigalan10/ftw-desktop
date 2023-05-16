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

  const playerTypeMap = {
    casual: 'Casual',
    hardcore: 'Hardcore',
    pro: 'Professional',
  };

  const getPlayScheduleLabel = (value) => {
    switch (value) {
      case 'morning':
        return 'Morning';
      case 'afternoon':
        return 'Afternoon';
      case 'evening':
        return 'Evening';
      case 'flexible':
        return 'Flexible';
      default:
        return value;
    }
  };

  const getGenresLabel = (value) => {
    switch (value) {
      case 'action':
        return 'Acción';
      case 'adventure':
        return 'Aventura';
      case 'rpg':
        return 'Rol';
      case 'fps':
        return 'Disparos en primera persona';
      case 'tps':
        return 'Disparos en tercera persona';
      case 'platformer':
        return 'Plataformas';
      case 'strategy':
        return 'Estrategia';
      case 'simulation':
        return 'Simulación';
      case 'sports':
        return 'Deportes';
      case 'fighting':
        return 'Lucha';
      case 'music':
        return 'Música';
      case 'puzzle':
        return 'Puzzle';
      case 'racing':
        return 'Carreras';
      case 'sandbox':
        return 'Mundo abierto';
      case 'horror':
        return 'Terror';
      case 'stealth':
        return 'Sigilo';
      case 'survival':
        return 'Supervivencia';
      default:
        return value;
    }
  };

  const getLanguagesLabel = (value) => {
    switch (value) {
      case 'en':
        return 'English';
      case 'es':
        return 'Español';
      case 'fr':
        return 'Français';
      case 'de':
        return 'Deutsch';
      case 'zh-hans':
        return '简体中文';
      case 'ja':
        return '日本語';
      case 'ko':
        return '한국어';
      case 'pt':
        return 'Português';
      case 'ru':
        return 'Pусский';
      case 'ca':
        return 'Català';
      case 'gl':
        return 'Galego';
      case 'eu':
        return 'Euskara';
      default:
        return value;
    }
  };
  const getCountryLabel = (value) => {
    switch (value) {
      case 'ES':
        return 'España';
      case 'US':
        return 'Estados Unidos';
      case 'MX':
        return 'México';
      case 'AR':
        return 'Argentina';
      case 'CO':
        return 'Colombia';
      case 'PE':
        return 'Perú';
      case 'CL':
        return 'Chile';
      case 'BR':
        return 'Brasil';
      case 'FR':
        return 'Francia';
      case 'DE':
        return 'Alemania';
      case 'IT':
        return 'Italia';
      case 'UK':
        return 'Reino Unido';
      case 'JP':
        return 'Japón';
      case 'CN':
        return 'China';
      case 'KR':
        return 'Corea del Sur';
      case 'RU':
        return 'Rusia';
      case 'AU':
        return 'Australia';
      case 'CA':
        return 'Canadá';
      case 'IN':
        return 'India';
      case 'ZA':
        return 'Sudáfrica';
      default:
        return value;
    }
  };
  
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
