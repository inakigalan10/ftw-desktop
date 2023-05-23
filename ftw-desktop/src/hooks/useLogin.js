import { useContext, useEffect, useState } from "react";
import { UserContext } from "../userContext";


export const useLogin = () => {
  const {authToken,setAuthToken,idUser,setIdUser,usernameUser,setUsernameUser, idProfile, setIdProfile} = useContext(UserContext);
  const [error, setError] = useState("");

  const doLogin = (formState) => {
    console.log("Comprobando credenciales...");
    event.preventDefault();
    fetch("http://equip10.insjoaquimmir.cat/login/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((response) => response.json())
      .then((resposta) => {
        if ('token' in resposta ) {
          setAuthToken(resposta.token);
          setIdUser(resposta.user.id);
          setUsernameUser(resposta.user.username)
          setIdProfile(resposta.user.profile)
          localStorage.setItem('authToken', resposta.token);
          localStorage.setItem('username',resposta.user.username)
          localStorage.setItem('idUsername',resposta.user.id)
          localStorage.setItem('idProfile',resposta.user.profile)
          console.log(resposta);
          
        } else {
          setAuthToken("");
          setError("Usuario o contraseña incorrecta");
          alert("Usuario o contraseña incorrecta")
        }
      })
      .catch((error) => {
        console.log("Error de red:", error);
      });
  };

  return { doLogin, error, setError };
};