import React, {useContext} from 'react';
import '../layaout/layaout.css';
import { AiFillHome } from 'react-icons/ai';
import { BsFire } from 'react-icons/bs';
import { AiFillNotification } from 'react-icons/ai';
import { TbMessages } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from "../userContext";


const Menu = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };
  const {authToken,setAuthToken,idUser,setIdUser,usernameUser, setUsernameUser} = useContext(UserContext);


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
        <div className={`menu-item ${isActive("/notification")}`}>
          <div className="icono-menu">
            <AiFillNotification />
          </div>
          <div>
            <Link to={"/notification"} style={{ color: "black" }}>
              Notification
            </Link>
          </div>
        </div>
        <div className={`menu-item ${isActive("/message")}`}>
          <div className="icono-menu">
            <TbMessages />
          </div>
          <div>
            <Link to={"/messages"} style={{ color: "black" }}>
              Message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
