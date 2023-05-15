import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { UserContext } from "../userContext";
import { ChatList } from './ChatList';
import { getChats } from './slice/thunks';

export const ChatsList = () => {
  const dispatch = useDispatch();
  const {chats = [], isLoading} = useSelector((state) => state.chat);
  const { authToken,setAuthToken,idUser,setIdUser,usernameUser, setUsernameUser } = useContext(UserContext);

  
  useEffect(() => {
    dispatch(getChats(authToken))
  }, [])
  console.log(chats)
  return (
    <>
      {isLoading ? (
        "Espera...."
      ) : (
        <>
          <div>
            <div className='header-match'>
              <h1>LListat de chats</h1>
            </div>
            {chats.length === 0 ? (
              <h1>No tienes chats</h1>
            ) : (
              <div className='cards-match'>
                {chats.map((v, i) => {
                  return (
                    <>
                      <ChatList key={v.id} v={v} />
                    </>
                  )
                })}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};
