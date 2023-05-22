import React, { useContext } from 'react';
import { UserContext } from '../userContext';
import ChatListItem from './ChatListItem';
import { ChatContext } from '../ChatContext';

const ChatsList = () => {
  const { chats } = useContext(ChatContext);
  const parsedListChat = Array.isArray(chats) ? chats : []; // Verificar si ListChat ya es un array
  
  // Ordenar los chats de más nuevos a más antiguos
  parsedListChat.sort((a, b) => new Date(b.last_message_date) - new Date(a.last_message_date));
  
  console.log(chats)
  return (
    <div>
      <div>
        <h1>Listado de Chats</h1>
      </div>
      <div>
        {parsedListChat.length === 0 ? (
          <h2>No hay chats disponibles</h2>
        ) : (
          parsedListChat.map((v, index) => (
            console.log(v.id),
            <ChatListItem key={v.id} v={v} />
          ))
        )}
      </div>
    </div>
  );
}

export default ChatsList;
