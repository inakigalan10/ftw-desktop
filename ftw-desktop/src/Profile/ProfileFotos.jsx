import React, { useRef } from 'react';
import './Profile.css';

const ProfileFotos = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  }

  return (
    <div className='gallery-container'>
      <div className='gallery-item' onClick={handleClick}>
        <img src='./img/avatar.jpeg' alt='' />
      </div>
      <div className='gallery-item' onClick={handleClick}>
        <img src='./img/avatar.jpeg' alt='' />
      </div>
      <div className='gallery-item' onClick={handleClick}>
        <img src='./img/avatar.jpeg' alt='' />
      </div>
      <div className='gallery-item' onClick={handleClick}>
        <img src='./img/avatar.jpeg' alt='' />
      </div>
      <input type='file' style={{ display: 'none' }} ref={inputRef} />
    </div>
  )
}

export default ProfileFotos;
