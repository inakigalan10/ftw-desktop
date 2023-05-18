import {
  startLoadingUsers,
  setUsers,
  setUser,
  setInfo,
  setError,
  } from "./userSlice";
  
  // Obtenim un sol user
  export const getUser = (authToken, id) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingUsers());
  
      try {
        const data = await fetch(
          "http://127.0.0.1:8000/profile/" + id,
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
        dispatch(setUser(resposta.data));
      } catch (e) {
        console.log(e);
        //dispatch(setError(e))
      }
    };
  };
    
 