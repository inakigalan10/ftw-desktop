import React from 'react'
import './Profile.css';

const ProfileHorario = () => {
  return (
    <div class="availability">
        <h2>Disponibilidad</h2>
        <form>
            <label for="week">Entre semana:</label>
            <select id="wekk">
            <option value="mañana">Mañana</option>
            <option value="tarde">Tarde</option>
            <option value="noche">Noche</option>
            <option value="noche">No puedo</option>
            </select>
            <label for="weekend">Findes de semana:</label>
            <select id="weekend">
            <option value="mañana">Mañana</option>
            <option value="tarde">Tarde</option>
            <option value="noche">Noche</option>
            <option value="noche">No puedo</option>
            </select>
        </form>
        
        <button class="save-button">Guardar</button>
    </div>

  )
}

export default ProfileHorario