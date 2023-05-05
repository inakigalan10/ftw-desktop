import React from 'react';
import './notification.css';


const Notification = () => {
  return (
    <div>
      <div class="notifications">
        <h1 class="titulo">Notificaciones</h1>
        <ul class="notification-list">
          <li class="notification-item">
            <img src="https://via.placeholder.com/50" alt="Imagen de perfil" class="notification-img" />
            <div class="notification-content">
              <p class="notification-text">Nombre de usuario ha comentado en tu publicación.</p>
              <p class="notification-time">Hace 2 horas</p>
            </div>
          </li>
          <li class="notification-item">
            <img src="https://via.placeholder.com/50" alt="Imagen de perfil" class="notification-img" />
            <div class="notification-content">
              <p class="notification-text">Nombre de usuario te ha enviado un mensaje.</p>
              <p class="notification-time">Hace 1 día</p>
            </div>
          </li>
          <li class="notification-item">
            <img src="https://via.placeholder.com/50" alt="Imagen de perfil" class="notification-img" />
            <div class="notification-content">
              <p class="notification-text">Has recibido una solicitud de amistad de Nombre de usuario.</p>
              <p class="notification-time">Hace 3 días</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Notification