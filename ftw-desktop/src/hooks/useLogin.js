import { useContext, useEffect, useState } from "react";
import { UserContext } from "../userContext";


export const useLogin = () => {
  const {authToken,setAuthToken,idUser,setIdUser,usernameUser, setUsernameUser, sessionCookie, setSessionCookie, idProfile,setIdProfile} = useContext(UserContext);
  const [error, setError] = useState("");

  const doLogin = (formState) => {
    console.log("Comprobando credenciales...");
    event.preventDefault();
    fetch("http://127.0.0.1:8000/login/", {
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

          localStorage.setItem('authToken',resposta.token)
          localStorage.setItem('UsernameUser', resposta.user.username)
          localStorage.setItem('idUser', resposta.user.id)
          localStorage.setItem('idProfile', resposta.user.profile)


          console.log(authToken);
          console.log(id);
        } else {
          setAuthToken("");
          setError("Usuario o contraseña incorrecta");
        }
      })
      .catch((error) => {
        console.log("Error de red:", error);
      });
  };

  return { doLogin, error, setError };
};