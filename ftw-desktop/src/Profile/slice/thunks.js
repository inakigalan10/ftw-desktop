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
          "http://equip10.insjoaquimmir.cat/api/profile/" + name,
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
  
      fetch('http://equip10.insjoaquimmir.cat/api/create-profile/', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.success === true) {
            dispatch(setInfo('Perfil correctamente guardado'));
            
            localStorage.setItem('idProfile',data.id)

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

  export const editProfile = (authToken, perfil) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingProfiles());
      let { description, player_type, play_schedule, genres, languages, country } = perfil;
      console.log("hola"+authToken)
      const requestOptions = {
        method: 'PUT',
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
  
      fetch('http://equip10.insjoaquimmir.cat/api/update-profile/', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.success === true) {
            dispatch(setInfo('Perfil correctamente actualizado'));
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
  