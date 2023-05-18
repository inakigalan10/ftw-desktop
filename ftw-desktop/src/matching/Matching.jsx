import React, { useState } from 'react';
import { useContext } from "react";
import { useEffect } from "react";
import './matching.css';
import { AiFillLike } from 'react-icons/ai';
import { AiFillDislike } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../userContext";
import { Like, dislike, getProfileMatch } from './slice/thunks';


const Matching = () => {
  const dispatch = useDispatch();
  
  let {authToken, setAuthToken } = useContext(UserContext);
  console.log(authToken);
  useEffect(() => {
    dispatch(getProfileMatch(authToken))
  }, []);

  const {matching, isLoading, error,info} = useSelector(state => state.matching)
  console.log(matching)
  
  const [showPopUpLike, setShowPopUpLike] = useState(false);
  const [ShowPopUpDislike, setShowPopUpDislike] = useState(false);

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
          <h1>{matching.username}</h1>
        </div>
        <div className='info-user-card'>
          <div className='horario-user-card'>
            <p>{matching.play_schedule}</p>
          </div>
          <div className='horario-user-card'>
            <p>{matching.country}</p>
          </div>
          <div className='horario-user-card'>
            <p>{matching.genres}</p>
          </div>
          <div className='horario-user-card'>
            <p>{matching.player_type}</p>
          </div>
          <div className='horario-user-card'>
            <p>{matching.languages}</p>
          </div>
          <div className='desc-user-card'>
            <p>
            {matching.description}
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
