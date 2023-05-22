import React, { useContext } from 'react';
import { UserContext } from '../userContext';
import { Link } from 'react-router-dom';
import './chat.css'

const ChatListItem = ({v}) => {
  const { authToken, setAuthToken, idUser, setIdUser, usernameUser, setUsernameUser, idProfile, setIdProfile, Chat, setChat } = useContext(UserContext);
  console.log(v.id)
  return (
    <div className='chat-list-item' key={v.id}>
      
      <Link to={"/chat/" + v.id}>
        <div>
          <div className='chat-username'>
              <h2>{v.other_user_username}</h2>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ChatListItem;
