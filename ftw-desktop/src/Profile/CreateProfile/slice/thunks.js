import {
    startLoadingProfiles,
    setProfiles,
    setProfile,
    setInfo,
    setError,
  } from "./profileSlice";
  
  // Obtenim un sol profile
  export const getProfile = (authToken, id) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingProfiles());
  
      try {
        const data = await fetch(
          "https://backend.insjoaquimmir.cat/api/posts/" + id,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + authToken,
            },
            method: "GET",
          }
        );
        const resposta = await data.json();
  
        dispatch(setProfile(resposta.data));
      } catch (e) {
        console.log(e);
        //dispatch(setError(e))
      }
    };
  };
  export const getProfiles = (authToken) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingProfiles());     
      try {
        const data = await fetch(
          "https://backend.insjoaquimmir.cat/api/posts/",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + authToken,
            },
            method: "GET",
          }
        );
        const resposta = await data.json();
  
        dispatch(setProfiles(resposta.data));
      } catch (e) {
        console.log(e);
        //dispatch(setError(e))
      }
    };
  };
  
  export const delProfile = (id, authToken) => {
    return async (dispatch, getState) => {
      dispatch(setError(""));
      const res = await fetch(
        "https://backend.insjoaquimmir.cat/api/posts/" + id,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + authToken,
          },
          method: "DELETE",
        }
      );
  
      const json = await res.json();
  
      if (json.success == true) {
        dispatch(getPosts(authToken, -1));
      } else {
        dispatch(setError(json.message));
      }
    };
  };
  
  export const editPost = (authToken, formulari, id) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingPosts());
  
      let { description, player_type, play_schedule, genres, languages, country } =
        formulari;
  
      const formData = new FormData();
      formData.append("description", description);
      formData.append("player_type", player_type);
      formData.append("play_schedule", play_schedule);
      formData.append("genres", genres);
      formData.append("languages", languages);
      formData.append("country", country);
      
      // Enviam dades a l'aPI i recollim resultat
      const prejson = await fetch(
        "http://127.0.0.1:8000/update-profile/" + id,
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + authToken,
          },
          method: "POST",
          body: formData,
        }
      );
      const resposta = await prejson.json();
  
      console.log(resposta);
      if (resposta.success == true) {
        dispatch(setInfo("Profile Correctament Editat"));
      } else {
        dispatch(setError(resposta.message));
      }
    };
  };
  
  export const addProfile = (formulari, authToken) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingProfiles());
      let {  description, player_type, play_schedule, genres, languages, countr } =
        formulari;
  
      const formData = new FormData();
     
      formData.append("visibility", visibility);
      formData.append("description", description);
      formData.append("player_type", player_type);
      formData.append("play_schedule", play_schedule);
      formData.append("genres", genres);
      formData.append("languages", languages);
      formData.append("country", country);
  
      // Enviam dades a l'aPI i recollim resultat
      const prejson = await fetch(
        "http://127.0.0.1:8000/create-profile/",
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + authToken,
          },
          method: "POST",
          body: formData,
        }
      );
      const resposta = await prejson.json();
  
      console.log(resposta);
      if (resposta.success == true) {
        dispatch(setInfo("Profile Correctament Desat"));
      } else {
        dispatch(setError(resposta.message));
      }
    };
  };
  

  