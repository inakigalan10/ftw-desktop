import {
  startLoadingMatchings,
  setMatchings,
  setMatching,
  setInfo,
  setError,
  setMatch
  } from "./matchingSlice";
  
  // Obtenim un sol profile
  export const getProfileMatch = (authToken) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingMatchings());
     

      try {
        const data = await fetch(
          "http://equip10.insjoaquimmir.cat/api/matchmaking/" ,
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
  
      fetch('http://equip10.insjoaquimmir.cat/api/like-dislike/'+id+"/", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.success === true && data.message != 'Match') {
            dispatch(setInfo('Like al perfil'));
            dispatch(setMatch(data.match))
            
          } else if (data.message = 'Match') {
            dispatch(setInfo('Match'));
          }else{
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
  
      fetch('http://equip10.insjoaquimmir.cat/api/like-dislike/' + id +"/", requestOptions)
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
    
 