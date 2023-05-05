import React from 'react';
import './matches.css';


const Matches = () => {
  return (
    <div>
      <div className='titulo'>
        <h1>
          Matches
        </h1>
      </div>
      <div class="person-list">
        <div class="person">
          <img src="https://via.placeholder.com/50" alt="Imagen de persona" class="person-img"/>
          <p class="person-name">Nombre de la persona</p>
        </div>
        <div class="person">
          <img src="https://via.placeholder.com/50" alt="Imagen de persona" class="person-img"/>
          <p class="person-name">Nombre de la persona</p>
        </div>
        <div class="person">
          <img src="https://via.placeholder.com/50" alt="Imagen de persona" class="person-img"/>
          <p class="person-name">Nombre de la persona</p>
        </div>
        <div class="person">
          <img src="https://via.placeholder.com/50" alt="Imagen de persona" class="person-img"/>
          <p class="person-name">Nombre de la persona</p>
        </div>
      </div>
    </div>

  )
}

export default Matches