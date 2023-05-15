import React, { useState, useContext } from 'react';
import { UserContext } from "../userContext";
import { Link } from 'react-router-dom';
import { FaRegPaperPlane } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';


export const ChatList = ({v}) => {
  const {authToken,setAuthToken,idUser,setIdUser,usernameUser, setUsernameUser } = useContext(UserContext);


  return (
    <>
      <div className='card-match' key={v.id}>

  
            <div className='match'>
              <Link to={`/chat/${v.chat_id}`}>
              <div className='match'>
                
                <div className='username-match'>
                  <h1>{v.participant_name}</h1>
                </div>
              </div>
              </Link>
              
            </div>
          
     
      </div>
    </>
  );
};
