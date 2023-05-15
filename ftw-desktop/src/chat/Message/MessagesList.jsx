import React, { useContext } from 'react';
import MessageInput from './MessageInput';
import Message from './Message';
import { useParams } from 'react-router-dom';
import { UserContext } from "../../userContext";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from './slice/thunks';
import { useEffect } from "react";




const MessagesList = () => {
  const { id } = useParams();
  const { authToken, setAuthToken} = useContext(UserContext);
  const dispatch = useDispatch();

  const { messages = [], isLoading, error="", } = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(getMessages(id, authToken));
  }, []);
  return (
    <>
      
      {messages.map((v) => {
        return <Message key={v.id} message={v} />;
      })}
      <MessageInput id={id}/>
    </>
  )
}

export default MessagesList