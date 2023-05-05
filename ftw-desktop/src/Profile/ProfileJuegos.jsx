import React from 'react';
import './Profile.css';


const ProfileJuegos = () => {
  return (
    <div class="game-list-container">
  <h2>¿A qué juegos juegas?</h2>
  <div class="game-list-wrapper">
    <ul class="game-list">
      <li>
        <input type="checkbox" id="game-1" name="game-1" value="minecraft" />
        <label for="game-1">Minecraft</label>
      </li>
      <li>
        <input type="checkbox" id="game-2" name="game-2" value="fortnite" />
        <label for="game-2">Fortnite</label>
      </li>
      <li>
        <input type="checkbox" id="game-3" name="game-3" value="league-of-legends" />
        <label for="game-3">League of Legends</label>
      </li>
      <li>
        <input type="checkbox" id="game-4" name="game-4" value="call-of-duty" />
        <label for="game-4">Call of Duty</label>
      </li>
      <li>
        <input type="checkbox" id="game-5" name="game-5" value="overwatch" />
        <label for="game-5">Overwatch</label>
      </li>
    </ul>
        
  </div>
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

export default ProfileJuegos