import React, { useContext } from 'react';
import { UserContext } from '../userContext';
import ChatListItem from './ChatListItem';
import { ChatContext } from '../ChatContext';

const ChatsList = () => {
  const { user } = useContext(UserContext);
  const { chats, updateChats } = useContext(ChatContext);

  const parsedListChat = Array.isArray(chats) ? chats : [];
  parsedListChat.sort((a, b) => new Date(b.last_message_date) - new Date(a.last_message_date));

  return (
    <div>
      <div>
        <h1>Listado de Chats</h1>
      </div>
      <div>
        {parsedListChat.length === 0 ? (
          <h2>No hay chats disponibles</h2>
        ) : (
          parsedListChat.map((chat, index) => (
            <ChatListItem
              key={`${chat.id}-${index}`} // Combina el id del chat con el índice como clave única
              chat={chat} // Pasa el chat como prop al ChatListItem
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ChatsList;
