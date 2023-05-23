import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../userContext';
import { Link } from 'react-router-dom';
import './chat.css';
import { ChatContext } from '../ChatContext';

const ChatListItem = ({ chat }) => {
  const { chats, updateChats } = useContext(ChatContext);



  const handleChatClick = () => {
    const updatedChats = chats.map((c) => {
      if (c.id === chat.id) {
        // Actualizar el campo "read" a true para el chat seleccionado
        return { ...c, read: true };
      }
      return c;
    });

    updateChats(updatedChats);
  };

  return (
    <div className='chat-list-item'>
        <Link to={`/chat/${chat.id}`} onClick={handleChatClick}>
          <div>
            <div className='chat-username'>
              <h2>{chat.other_user_username}{chat.id}</h2>
            </div>
          </div>
        </Link>
    </div>
  );
};

export default ChatListItem;
