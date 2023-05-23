import { useContext, useEffect, useState } from "react";
import { UserContext } from "../userContext";

export const useRegister = () => {
  const { authToken, setAuthToken, idUser, setIdUser, usernameUser, setUsernameUser, idProfile, setIdProfile } = useContext(UserContext);
  const [error, setError] = useState("");
  const [registerError, setRegisterError] = useState(""); // Nuevo estado para el mensaje de error

  const doRegister = (username, email, password, password_confirm) => {
    console.log("Comprobando credenciales...");
    const data = {
      username: username,
      email: email,
      password: password,
      password_confirm: password_confirm,
    };
    fetch("http://equip10.insjoaquimmir.cat/signup/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((resposta) => {
        if ('token' in resposta ) {
  
          setAuthToken(resposta.token);
          setIdUser(resposta.user.id);
          setUsernameUser(resposta.user.username);
          setIdProfile(resposta.user.profile);

          localStorage.setItem('authToken', resposta.token);
          localStorage.setItem('username', resposta.user.username);
          localStorage.setItem('idUsername', resposta.user.id);
          localStorage.setItem('idProfile', resposta.user.profile);

      
        } else {
          setAuthToken("");
          setRegisterError(resposta.username[0]); // Guardar el mensaje de error del username en el estado
        }
      })
      .catch((error) => {
        console.log("Error de red:", error);
      });
  };
  
  return { doRegister, error, setError, registerError }; // Añadir registerError al objeto de retorno
};
