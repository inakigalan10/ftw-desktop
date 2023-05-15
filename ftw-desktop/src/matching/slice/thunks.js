import {
  startLoadingMatchings,
  setMatchings,
  setMatching,
  setInfo,
  setError,
  } from "./matchingSlice";
  
  // Obtenim un sol profile
  export const getProfileMatch = (authToken) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingMatchings());

      try {
        const data = await fetch(
          "http://127.0.0.1:8000/matchmaking/" ,
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
  
        dispatch(setMatching(resposta.data));
      } catch (e) {
        console.log(e);
        //dispatch(setError(e))
      }
    };
  };

  export const Like = (authToken, id) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingMatchings());
    
      const bodyData = {
        action: 'like'
      };
    
      const requestOptions = {
        method: 'POST',
        headers: {
          Authorization: 'Token ' + authToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
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
  

  export const dislike = (authToken, id) => {
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
        },
        body: JSON.stringify(bodyData),
      };
  
      fetch('http://127.0.0.1:8000/like-dislike/' + id +"/", requestOptions)
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
    
 