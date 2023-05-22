import React, { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState([]);
  const [notis, setNotis] = useState([]);


  const updateChats = (newChats) => {
    setChats(newChats);
  };
  const updateNotis = (newNotis) => {
    setNotis(newNotis);
  };

  return (
    <ChatContext.Provider value={{ chats, updateChats, notis, updateNotis }}>
      {children}
    </ChatContext.Provider>
  );
};