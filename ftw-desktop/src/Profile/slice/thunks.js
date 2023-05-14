import {
    startLoadingProfiles,
    setProfile,
    setInfo,
    setError,
  } from "./profileSlice";
  
  // Obtenim un sol profile
  export const getProfile = (authToken, name) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingProfiles());
  
      try {
        const data = await fetch(
          "http://127.0.0.1:8000/profile/" + name,
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
        dispatch(setProfile(resposta.data));
      } catch (e) {
        console.log(e);
        //dispatch(setError(e))
      }
    };
  };
    
  export const addProfile = (perfil, authToken) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingProfiles());
      let { description, player_type, play_schedule, genres, languages, country } = perfil;
  
      const requestOptions = {
        method: 'POST',
        headers: {
          Authorization: 'Token ' + authToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description,
          player_type,
          play_schedule,
          genres,
          languages,
          country,
        }),
      };
  
      fetch('http://127.0.0.1:8000/create-profile/', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.success === true) {
            dispatch(setInfo('Perfil correctamente guardado'));
          } else {
            dispatch(setError(data.message));
          }
        })
        .catch((error) => {
          console.error(error);
          dispatch(setError('Error en la solicitud'));
        });
    };
  };
  