import {
  startLoadingChats,
  setChats,
  setChat,
  setInfo,
  setError,
  } from "./chatSlice";
  
  // Obtenim els matchs
  export const getChats = (authToken) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingChats());
  
      try {
        const data = await fetch(
          "http://127.0.0.1:8000/chat-list/" ,
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
        console.log(resposta.data);
        console.log("Token " + authToken);
        dispatch(setChats(resposta.data));
      } catch (e) {
        console.log(e);
        //dispatch(setError(e))
      }
    };
  };
  