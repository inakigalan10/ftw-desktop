import React, { useState, useEffect, useContext } from 'react';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from '../userContext';
import { Like, dislike, getProfileMatch } from './slice/thunks';
import { useNavigate } from 'react-router-dom';
import './matching.css';

const Matching = () => {
  const dispatch = useDispatch();
  const {
    authToken,
    idUser,
    usernameUser,
    idProfile,
    readChat,
    setReadChat,
    ListChat,
    setListChat,
  } = useContext(UserContext);
  const { matching, isLoading, error, message, info} = useSelector(
    (state) => state.matching
  );
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [showPopUpLike, setShowPopUpLike] = useState(false);
  const [showPopUpDislike, setShowPopUpDislike] = useState(false);

  useEffect(() => {
    dispatch(getProfileMatch(authToken));
    if (!idProfile) {
      navigate('/createProfile');
    }
  }, [dispatch, authToken, idProfile, navigate]);

  const handleLikeClick = async () => {
    if (!showPopUpLike) {
      setShowPopUpLike(true);
      dispatch(Like(authToken, matching.user_id));
      setTimeout(() => {
        setShowPopUpLike(false);
        dispatch(getProfileMatch(authToken));
      }, 2000);
    }
  };

  const handleDislikeClick = async () => {
    if (!showPopUpDislike) {
      setShowPopUpDislike(true);
      dispatch(dislike(authToken, matching.user_id));
      setTimeout(() => {
        setShowPopUpDislike(false);
        dispatch(getProfileMatch(authToken));
      }, 2000);
    }
  };

  useEffect(() => {
    if (matching === undefined) {
      navigate('/'); // Redirigir si no hay perfiles disponibles
    }
  }, [matching, navigate]);
  
  console.log(info)
  
  useEffect(() => {
    
    if (info == 'Match') {
      alert('¡Tienes un Match!');
    }
  }, [info]);
  

  if (matching === undefined) {
    return (
      <div className="no-profiles">
        <h1>No hay perfiles disponibles</h1>
      </div>
    );
  }

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
    <div className="main">
      <div className="like_user" onClick={handleLikeClick}>
        <AiFillLike />
      </div>
      <div className="no_like_user" onClick={handleDislikeClick}>
        <AiFillDislike />
      </div>
      <div className="card">
        <div className="img-card">
          <img src="./img/avatar.jpeg" alt="" />
        </div>
        <div className="name-user-card">
          <h1>{matching && matching.username}</h1>
        </div>
        <div className="info-user-card">
          <div className="horario-user-card">
            <p>{matching && getPlayScheduleLabel(matching.play_schedule)}</p>
          </div>
          <div className="horario-user-card">
            <p>{matching && getCountryLabel(matching.country)}</p>
          </div>
          <div className="horario-user-card">
            <p>
              {matching &&
                `${getGenresLabel(matching.genres[0])} ${getGenresLabel(
                  matching.genres[1]
                )} ${getGenresLabel(matching.genres[2])}`}
            </p>
          </div>
          <div className="horario-user-card">
            <p>{matching && playerTypeMap[matching.player_type]}</p>
          </div>
          <div className="horario-user-card">
          <p>{matching && `${getLanguagesLabel(matching.languages[0])} ${getLanguagesLabel(matching.languages[1])} ${getLanguagesLabel(matching.languages[2])}`}</p>

          </div>
          <div className="desc-user-card">
            <p>{matching && matching.description}</p>
          </div>
        </div>
       
      </div>
 
      {showPopUpLike && (
        <div>
          <div className="pop-up">
            Té ha gustado el perfil
            ¿Habra suerte?
            <div className="progress"></div>
          </div>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
        </div>
      )}
      {showPopUpDislike && (
        <div>
          <div className="pop-up-Dislike">
            No té ha gustado el perfil
            ¡¡¡¡Pobrecillo!!!!
            <div className="progress-red"></div>
          </div>
          <div className="progress-bar">
            <div className="progress-red"></div>
          </div>
        </div>
      )}
     
    </div>
  );
};

export default Matching;
