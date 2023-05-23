import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../userContext';
import { Link } from 'react-router-dom';
import './chat.css';
import { ChatContext } from '../ChatContext';

const ChatListItem = ({ chat }) => {
  const { chats, updateChats } = useContext(ChatContext);
  const [unreadClass, setUnreadClass] = useState('');
  const handleChatClick = () => {
    if (!chat.read) {
      updateChats((prevChats) =>
        prevChats.map((prevChat) =>
          prevChat.id === chat.id ? { ...prevChat, read: true } : prevChat
        )
      );
    }
  };
  
  useEffect(() => {
    setUnreadClass(chat.read ? '' : 'unread');
   
  }, [chats]);

console.log(chat)
  return (
    <div className={`chat-list-item ${unreadClass}`}>
      <Link to={`/chat/${chat.id}`} onClick={handleChatClick}>
        <div>
          <div className={`chat-username`}>
            <h2>{chat.other_user_username}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChatListItem;
