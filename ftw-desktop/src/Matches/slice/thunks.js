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
          "http://equip10.insjoaquimmir.cat/match-list" ,
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

        dispatch(setMatchs(resposta.data));
      } catch (e) {
        console.log(e);
        //dispatch(setError(e))
      }
    };
  };

  export const addReport = (other_user_id, report, authToken) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingMatchs());
      let {subject, description } = report;
      let reported_user = other_user_id;
     
      const requestOptions = {
        method: 'POST',
        headers: {
          Authorization: 'Token ' + authToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reported_user,
          subject,
          description,
          
        }),
      };
  
      fetch('http://equip10.insjoaquimmir.cat/report/', requestOptions)
        .then((response) => response.json())
        .then((data) => {

          if (data.success === true) {
            dispatch(setInfo('Report enviado correctamente'));
            alert("Report enviado correctamente")
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
  
  