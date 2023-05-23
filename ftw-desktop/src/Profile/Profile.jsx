import React, { useState } from 'react';
import { useEffect } from "react";
import { useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from './slice/thunks';
import { UserContext } from "../userContext";
import { FaPencilAlt } from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';

import './Profile.css';
import { getUser } from './slice/user/thunks';
import UsersList from '../admin/UserList/UsersList';
import AdminPage from '../admin/AdminMenu';
import AdminMenu from '../admin/AdminMenu';
import AdminDashboard from '../admin/AdminDashboard';

export const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const {authToken,setAuthToken,idUser,setIdUser,usernameUser, setUsernameUser} = useContext(UserContext);
  const [showUsersList, setShowUsersList] = useState(false);

  useEffect(() => {
    dispatch(getProfile(authToken, id));
    dispatch(getUser(authToken, id));
  }, []);

  const { profile, isLoading, error, info } = useSelector(state => state.profile);
  console.log(profile);
  const { user } = useSelector(state => state.user);

  const handleAdminClick = () => {
    setShowUsersList(true);
  };

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

  return (
    <>
      {showUsersList ? (
        <AdminDashboard   />
      ) : (
        <>
          {profile && profile.user && profile.user.username ? (
            <div className="page-container-profile">
              <div className="header_profile">
                
                <div className="name_profile">
                  <h1 className="user_name_profile-profile">{profile.user.username}</h1>
                </div>
                {id == idUser ? (
                  <>
                    <Link to={"/profile/edit/" + id}>
                      <FaPencilAlt className="edit-icon" />
                    </Link>
                  </>
                ) : (
                  <></>
                )}
                {id == idUser && user.is_staff ? (
                  <>
                    <div className='boton-admin' onClick={handleAdminClick}>
                      <MdAdminPanelSettings/>
                    </div>
                  </>
                ) : (
                  <></>
                )}
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
                  <h3 className="genres-profile">
                    {getGenresLabel(profile.genres[0])} {getGenresLabel(profile.genres[1])} {getGenresLabel(profile.genres[2])}
                  </h3>
                </div>
                <div className="info-perfil">
                  <h2>Idiomas:</h2>
                  <h3 className="languages-profile">
                    {getLanguagesLabel(profile.languages[0])} {getLanguagesLabel(profile.languages[1])} {getLanguagesLabel(profile.languages[2])}
                  </h3>
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
      )}
    </>
  );
};
