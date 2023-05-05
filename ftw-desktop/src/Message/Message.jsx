import React from 'react'

const Message = () => {
  return (
    <div className="chat-container">
      <div className="sidebar">
        <h2>Chats abiertos</h2>
        <ul className="chat-list">
          <li className="chat-item active">
            <div className="chat-avatar">
              <img src="https://via.placeholder.com/50" alt="Avatar" />
            </div>
            <div className="chat-details">
              <h3 className="chat-name">Usuario 1</h3>
              <p className="chat-message">Hola, ¿cómo estás?</p>
            </div>
          </li>
          <li className="chat-item">
            <div className="chat-avatar">
              <img src="https://via.placeholder.com/50" alt="Avatar" />
            </div>
            <div className="chat-details">
              <h3 className="chat-name">Usuario 2</h3>
              <p className="chat-message">¿Qué planes tienes para hoy?</p>
            </div>
          </li>
          <li className="chat-item">
            <div className="chat-avatar">
              <img src="https://via.placeholder.com/50" alt="Avatar" />
            </div>
            <div className="chat-details">
              <h3 className="chat-name">Usuario 3</h3>
              <p className="chat-message">¡Hola! ¿Podrías ayudarme con algo?</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="chat-window">
        <div className="chat-header">
          <div className="chat-avatar">
            <img src="https://via.placeholder.com/50" alt="Avatar" />
          </div>
          <h3 className="chat-name">Usuario 1</h3>
        </div>
        <div className="chat-body">
          <ul className="message-list">
            <li className="message-item received">
              <div className="message-content">
                <p>Hola, ¿cómo estás?</p>
              </div>
            </li>
            <li className="message-item sent">
              <div className="message-content">
                <p>¡Hola! Estoy bien, gracias. ¿Y tú?</p>
              </div>
            </li>
            <li className="message-item received">
              <div className="message-content">
                <p>También estoy bien, gracias.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="chat-footer">
          <input type="text" placeholder="Escribe un mensaje..." className="message-input" />
          <button className="send-button">Enviar</button>
        </div>
      </div>
    </div>
  )
}

export default Message
