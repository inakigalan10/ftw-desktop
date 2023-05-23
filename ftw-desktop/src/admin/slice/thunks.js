import {
  startLoadingUsers,
  setUsers,
  setUser,
  setInfo,
  setError,
  } from "../../Profile/slice/user/userSlice";
  
  // Obtenim els users
  export const getUsers = (authToken) => {
    return async (dispatch, getState) => {
      dispatch(startLoadingUsers());
  
      try {
        const data = await fetch(
          "http://equip10.insjoaquimmir.cat/api/admin/user-list/" ,
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
        dispatch(setUsers(resposta.data));
      } catch (e) {
        console.log(e);
        //dispatch(setError(e))
      }
    };
  };
  
  