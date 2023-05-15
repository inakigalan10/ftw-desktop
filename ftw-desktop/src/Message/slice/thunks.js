import {
  startLoadingMatchs,
  setMatchs,
  setMatch,
  setInfo,
  setError,
  } from "./matchSlice";
  
  // Obtenim els matchs
  export const getMatchs = (authToken) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingMatchs());
  
      try {
        const data = await fetch(
          "http://127.0.0.1:8000/match-list" ,
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
        dispatch(setMatchs(resposta.data));
      } catch (e) {
        console.log(e);
        //dispatch(setError(e))
      }
    };
  };
  
  