import React from 'react';
import '../layaout/layaout.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { BsFire } from 'react-icons/bs';
import { AiFillNotification } from 'react-icons/ai';
import { TbMessages } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div className="menu-container">
      <div className="user-info">
        <div>
          <img src="./img/img-user.jpg" alt="User avatar" />
        </div>
        <div>
          <h1 className="user-name">John Doe</h1>
          <p className="user-email">@fhkdsjdj</p>
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
        <div className={`menu-item ${isActive("/profile")}`}>
          <div className="icono-menu">
            <FaUserAlt />
          </div>
          <div>
            <Link to={"/profile"} style={{ color: "black" }}>
              Profile
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
            <Link to={"/message"} style={{ color: "black" }}>
              Message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
