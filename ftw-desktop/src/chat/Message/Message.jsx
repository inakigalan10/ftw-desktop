import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { UserContext } from "../../userContext";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import catStrings from "react-timeago/lib/language-strings/ca";
import TimeAgo from "react-timeago";



const Message = ({message}) => {
  const { authToken, setAuthToken, id, setId} = useContext(UserContext);
  const dispatch = useDispatch();
  const { messages = [], isLoading=true, add=true, error="", } = useSelector((state) => state.message);

  const formatter = buildFormatter(catStrings);
  console.log(message)
  return (
    <div>
      <div>
          <h1> message de {message.sender}</h1>
      </div>
      <div>
          <p>{message.content}</p>
      </div>
      <div>
        <p> 
          <TimeAgo
            date={message.created_at}
            formatter={formatter}
          ></TimeAgo>{" "}
        </p>
      </div>
    </div>
  )
}

export default Message