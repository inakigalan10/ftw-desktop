import {
  startLoadingUsers,
  setUsers,
  setUser,
  setInfo,
  setError,
  } from "./userSlice";
  
  // Obtenim un sol user
  export const getUser = (authToken, id) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingUsers());
  
      try {
        const data = await fetch(
          "http://127.0.0.1:8000/user/" + id,
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
        dispatch(setUser(resposta.data));
      } catch (e) {
        console.log(e);
        //dispatch(setError(e))
      }
    };
  };


  export const editUser = (authToken, user) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingUsers());
      let { username, email} = user;
      
      const requestOptions = {
        method: 'PUT',
        headers: {
          Authorization: 'Token ' + authToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          
        }),
      };
  
      fetch('http://127.0.0.1:8000/update-user/', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.success === true) {
            dispatch(setInfo('Perfil correctamente actualizado'));
            localStorage.setItem('username', username);

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
    
 