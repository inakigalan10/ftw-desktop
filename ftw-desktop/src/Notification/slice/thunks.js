import {
  startLoadingNotifications,
  setNotifications,
  setNotification,
  setInfo,
  setError,
  } from "./notificationSlice";
  
  // Obtenim els matchs
  export const getNotifications = (authToken) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingNotifications());
  
      try {
        const data = await fetch(
          "http://127.0.0.1:8000/notification-list/" ,
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
        dispatch(setNotifications(resposta.data));
      } catch (e) {
        console.log(e);
        //dispatch(setError(e))
      }
    };
  };
  