import React, { useState } from 'react';
import './matching.css';
import { AiFillLike } from 'react-icons/ai';
import { AiFillDislike } from 'react-icons/ai';

const Matching = () => {
  const [showPopUpLike, setShowPopUpLike] = useState(false);
  const [ShowPopUpDislike, setShowPopUpDislike] = useState(false);

  const handleLikeClick = () => {
    setShowPopUpLike(true);
    // Aquí podrías agregar más lógica relacionada al like
  };

  const handleDislikeClick = () => {
    setShowPopUpDislike(true);
    // Aquí podrías agregar más lógica relacionada al dislike
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
          <h1>@Pepitopalotes</h1>
        </div>
        <div className='info-user-card'>
          <div className='horario-user-card'>
            <p>noches 23:00h-02:00h</p>
          </div>
          <div className='desc-user-card'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              error ab voluptatem ut ipsa neque voluptas blanditiis repellat!
              Aliquam totam vero amet fuga praesentium in saepe nesciunt
              accusamus. Aliquid, aut?
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
            ¡¡¡¡Pobrecillo!!!!!
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
