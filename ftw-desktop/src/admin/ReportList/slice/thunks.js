import {
  startLoadingReportes,
  setReportes,
  setReporte,
  setInfo,
  setError,
  } from "./reportesSlice";
  
  // Obtenim els matchs
  export const getReportes = (authToken) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingReportes());
  
      try {
        const data = await fetch(
          "http://127.0.0.1:8000/admin/report-list/" ,
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
        dispatch(setReportes(resposta.data));
      } catch (e) {
        console.log(e);
        //dispatch(setError(e))
      }
    };
  };
  
  