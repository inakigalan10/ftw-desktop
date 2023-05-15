import {
  startLoadingMessages,
  setMessages,
  setMessage,
  setInfo,
  setError,
  addMessage,
  } from "./messageSlice";
  
  // Obtenim els message
  export const getMessages = (id, authToken) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingMessages());
      try {
        const data = await fetch(
          "http://127.0.0.1:8000/chat/"+ id ,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Token " + authToken,
            },
            method: "GET",
          }
        );
        const resposta = await data.json();
        console.log(resposta);
        dispatch(setMessages(resposta.data));
      } catch (e) {
        console.log(e);
        //dispatch(setError(e))
      }
    };
  };

// enviar message
export const sendMesage = (authToken, content, id) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingMessages());
    console.log(authToken)
    try {
      const data = await fetch(
        "http://127.0.0.1:8000/chat-send/"+id+"/" ,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Token " + authToken,
          },
          method: "POST",
          body:  JSON.stringify({content})
        }
      );
      const resposta = await data.json();
      console.log(resposta);
      dispatch(setInfo('Mensaje enviado corectamente'));
      dispatch(addMessage(resposta.data))
    } catch (e) {
      console.log(e);
      //dispatch(setError(e))
    }
  };
};

  
  