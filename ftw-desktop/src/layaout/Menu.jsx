import React, {useContext, useEffect } from 'react';
import '../layaout/layaout.css';
import { AiFillHome } from 'react-icons/ai';
import { BsFire } from 'react-icons/bs';
import { AiFillNotification } from 'react-icons/ai';
import { TbMessages } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from "../userContext";
import { ImExit } from 'react-icons/im';
import useSocketNotis from '../hooks/useSocketNotis';
import { ChatContext } from '../ChatContext';


const Menu = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };
  const {authToken,setAuthToken,idUser,setIdUser,usernameUser,setUsernameUser, idProfile, setIdProfile, readChat, setReadChat, ListChat, setListChat} = useContext(UserContext);
  const socket = useSocketNotis();
  const { chats, updateChats, notis, updateNotis } = useContext(ChatContext);
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Eliminar el token del local storage
    setAuthToken(null); // Actualizar el estado del token en el contexto (si es necesario)
    localStorage.removeItem('username'); // Eliminar el token del local storage
    setUsernameUser(null); // Actualizar el estado del token en el contexto (si es necesario)
    localStorage.removeItem('idUsername'); // Eliminar el token del local storage
    setIdUser(null); // Actualizar el estado del token en el contexto (si es necesario)
    localStorage.removeItem('idProfile'); // Eliminar el token del local storage
    setIdProfile(null);
  };
  
  useEffect(() => {
    if (authToken === null) {
      handleLogout();
    }
  }, [authToken]);

  useEffect(() => {
    socket.connect();

    socket.onMessage((event) => {
      const data = JSON.parse(event.data);
      console.log("aas",chats);

      if (data.type === 'chat_list') {
        updateChats(data.chat_list);

        
      } else if (data.type === 'unread_notification_list') {
        updateNotis(data.unread_notification);
        
      } else if (data.type === 'chat.update') {
        console.log("abdvhsdj",chats)
        const existingChatIndex = chats.findIndex((chat) => chat.id === data.id);

        if (existingChatIndex !== -1) {
          const updatedChats = chats.map((chat) => {
            if (chat.id === data.id) {
              return data.chat_data;
            } else {
              return chat;
            }
          });
          updateChats(updatedChats);
        } else {
          const updatedChats = [...chats, data.chat_data];
          updateChats(updatedChats);
        }
      } 
    });
  }, []);

  return (
    <div className="menu-container">
      <div className="user-info">
        <div>
          <img src="../public/img/img-user.jpg" alt="User avatar" />
        </div>
        <div>              
          <Link to={`/profile/${idUser}`} style={{ color: "black" }}>
                  <h1 className="user-name">{usernameUser}</h1>
          </Link>
          
          
        </div>
      </div>
      <div className="menu-items">
        <div className={`menu-item ${isActive("/")}`}>
          <div className="icono-menu">
            <AiFillHome />
          </div>
          <div>
            <Link to={"/"} style={{ color: "black" }}>
              Swip
            </Link>
          </div>
        </div>
        
        <div className={`menu-item ${isActive("/matches")}`}>
          <div className="icono-menu">
            <BsFire />
          </div>
          <div>
            <Link to={"/matches"} style={{ color: "black" }}>
              Matchs
            </Link>
          </div>
        </div>
        <div className={`menu-item ${isActive("/message")}`}>
          <div className="icono-menu">
            <TbMessages />
          </div>
          <div>
            <Link to={"/chatList"} style={{ color: "black" }}>
              Message
            </Link>
          </div>
        </div>
        <div className="menu-item" onClick={handleLogout}>
          <div>
            <ImExit/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;