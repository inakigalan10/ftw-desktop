import {
  startLoadingMatchings,
  setMatchings,
  setMatching,
  setInfo,
  setError,
  } from "./matchingSlice";
  import axios from 'axios';

  
  // Obtenim un sol profile
  export const getProfileMatch = (authToken) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingMatchings());

      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/matchmaking/",
          {
            withCredentials: true,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Token " + authToken,
              
            },
          }
        );
  
        dispatch(setMatching(response.data.data));
       
      } catch (error) {
        console.log(error);
        // dispatch(setError(error))
      }
    };
  };

  export const Like = (authToken, sessionCookie) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingMatchings());
  
      const bodyData = {
        action: 'like'
      };
  
      const requestOptions = {
        method: 'POST',
        credentials:'include',
        headers: {
          Authorization: 'Token ' + authToken,
          'Content-Type': 'application/json',
          'X-CSRFToken': sessionCookie,
        },
        body: JSON.stringify(bodyData),
        credentials: 'include', // Incluye la opción 'credentials' en la solicitud
      };
  
      fetch('http://127.0.0.1:8000/like-dislike/', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.success === true) {
            dispatch(setInfo('Like al perfil'));
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

  export const dislike = (authToken, sessionCookie) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingMatchings());
  
      const bodyData = {
        action: 'dislike'
      };
  
      const requestOptions = {
        method: 'POST',
        headers: {
          Authorization: 'Token ' + authToken,
          'Content-Type': 'application/json',
          'X-CSRFToken': sessionCookie,
        },
        body: JSON.stringify(bodyData),
        credentials: 'include', // Incluye la opción 'credentials' en la solicitud
      };
  
      fetch('http://127.0.0.1:8000/like-dislike/', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.success === true) {
            dispatch(setInfo('Dislike al perfil'));
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
    
 