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
          "http://equip10.insjoaquimmir.cat/api/profile-image/"+id ,
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
