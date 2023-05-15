import React, { useState } from 'react';
import  { useContext } from 'react';

import { sendMesage } from './slice/thunks';
import { useDispatch } from 'react-redux';
import { UserContext } from "../../userContext";
import { addMessage } from './slice/messageSlice';

const MessageInput = ({id}) => {
    
    const { authToken, setAuthToken} = useContext(UserContext);
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(sendMesage(authToken, message, id)).then((response) => {
            console(response);
            dispatch(addMessage(response));
          });
        setMessage('');
    };

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div className='input-chat'>
            <input type="text" value={message} onChange={handleChange} />
            </div>
            <button type='Submit'>
            Enviar
            </button>
        </form>
        </div>
  )
}

export default MessageInput;
