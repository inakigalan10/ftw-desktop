import React, { useState } from 'react';
import { useContext } from "react";
import { useEffect } from "react";
import './matching.css';
import { AiFillLike } from 'react-icons/ai';
import { AiFillDislike } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../userContext";
import { Like, dislike, getProfileMatch } from './slice/thunks';
import { getUser } from '../Profile/slice/user/thunks';
import { useNavigate } from 'react-router-dom';




const Matching = () => {
  const dispatch = useDispatch();
  
  let {authToken,setAuthToken,idUser,setIdUser,usernameUser, setUsernameUser} = useContext(UserContext);
  console.log(authToken);
  
  const {matching, isLoading, error,info} = useSelector(state => state.matching)
  console.log(matching)
  const { user } = useSelector(state => state.user);
  console.log(user.profile)
  const navigate = useNavigate();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [showPopUpLike, setShowPopUpLike] = useState(false);
  const [ShowPopUpDislike, setShowPopUpDislike] = useState(false);
  
  useEffect(() => {
    dispatch(getUser(authToken, idUser));
    dispatch(getProfileMatch(authToken))
  }, []);

  const handleLikeClick = () => {
    setShowPopUpLike(true);
    dispatch(Like(authToken, matching.id));
    dispatch(getProfileMatch(authToken));
  };
  
  const handleDislikeClick = () => {
    setShowPopUpDislike(true);
    dispatch(dislike(authToken, matching.id));
    dispatch(getProfileMatch(authToken));
  };

  useEffect(() => {
    if (!user.profile) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500); 

      return () => {
        clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta antes de que se complete
      };
    } else {
      setLoading(false);
    }
  }, [user.profile]);

  useEffect(() => {
    if (Loading) {
      return; // Mostrar el indicador de carga mientras se carga el perfil
    }
    
    if (!user.profile) {
      navigate('/createProfile');
    }
  }, [Loading, navigate, user.profile]);
  
  if (matching === undefined) {
    return (
      <div className="no-profiles">
        <h1>No hay perfiles disponibles</h1>
      </div>
    );
  }
  
  return (
    <div className='main'>
      <div className='like_user' onClick={handleLikeClick}>
        <AiFillLike />
      </div>
      <div className='card'>
        <div className='img-card'>
          <img src='./img/avatar.jpeg' alt='' />
        </div>
        <div className='name-user-card'>
          <h1>{matching && matching.username}</h1>
        </div>
        <div className='info-user-card'>
          <div className='horario-user-card'>
            <p>{matching && matching.play_schedule}</p>
          </div>
          <div className='horario-user-card'>
            <p>{matching && matching.country}</p>
          </div>
          <div className='horario-user-card'>
            <p>{matching && matching.genres}</p>
          </div>
          <div className='horario-user-card'>
            <p>{matching && matching.player_type}</p>
          </div>
          <div className='horario-user-card'>
            <p>{matching && matching.languages}</p>
          </div>
          <div className='desc-user-card'>
            <p>
            {matching && matching.description}
            </p>
          </div>
        </div>
      </div>
      <div className='no_like_user' onClick={handleDislikeClick}>
        <AiFillDislike />
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
      {ShowPopUpDislike && (
        <div>
          <div className="pop-up-Dislike">
          No té ha gustado el perfil 
            ¡¡¡¡Pobrecillo!!!!
          <div className="progress"></div>
          </div>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Matching;
