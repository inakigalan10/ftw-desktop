import {
    startLoadingFoto,
    setFoto,
    setInfo,
    setError,
    } from "./fotoSlice";

 
  // Obtenim la foto
  export const getFoto = (authToken, id) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingFoto());
  
      try {
        const data = await fetch(
          "http://127.0.0.1:8000/profile-image/"+id ,
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
        dispatch(setFoto(resposta.data));
      } catch (e) {
        console.log(e);
        //dispatch(setError(e))
      }
    };
  };
