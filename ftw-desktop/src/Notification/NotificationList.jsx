import React, { useContext } from 'react';
import { UserContext } from "../userContext";
import { Link } from 'react-router-dom'

export const NotificationList = ({v}) => {
  let { authToken, setAuthToken, id, setId } = useContext(UserContext)

  console.log(v)


  return (
    <>
      <div key={v.id}>
        {v.chat_id != null ? (
          
            <div>
              <div></div>
              <div className='username'>
                <h1>Nuevo match</h1>
                <p>{v.message}</p>
              </div>
            </div>
          
        ) : (
          
            <div>
              <div></div>
              <div className='username'>
                <h1>Nuevo Mensaje</h1>
              </div>
            </div>
          
        )}
      </div>
    </>
  );
};

