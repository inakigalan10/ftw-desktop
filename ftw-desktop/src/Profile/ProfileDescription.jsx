import React from 'react'
import './Profile.css';

const ProfileDescription = () => {
  return (
    <div>
        <textarea id="description" placeholder="Escribe aquí tu descripción"></textarea>
            <div class="button-container">
              <div>
                <button className="save-button">Guardar</button>
              </div>
              <div>
                <button className="clear-button">Borrar</button>
              </div>
            </div>
        </div>
  )
}

export default ProfileDescription