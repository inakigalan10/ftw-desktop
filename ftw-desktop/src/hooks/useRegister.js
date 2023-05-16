import { useContext, useEffect, useState } from "react";
import { UserContext } from "../userContext";


export const useRegister = () => {
  const {authToken,setAuthToken,idUser,setIdUser,usernameUser, setUsernameUser} = useContext(UserContext);
  const [error, setError] = useState("");

  const doRegister = (username, email, password, password_confirm) => {
    console.log("Comprobando credenciales...");
    event.preventDefault();
    const data = {
      username: username,
      email: email,
      password: password,
      password_confirm: password_confirm,
    };
    fetch("http://127.0.0.1:8000/signup/", {
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
          console.log(resposta);
          setAuthToken(resposta.token);
          setIdUser(resposta.user.id)
          setUsernameUser(resposta.user.username)

          +
          localStorage.setItem('authToken', resposta.token)
          localStorage.setItem('UsernameUser', resposta.user.username)
          localStorage.setItem('idUser', resposta.user.id)


          console.log(authToken);
         
        } else {
          setAuthToken("");
          setError("error");
        }
      })
      .catch((error) => {
        console.log("Error de red:", error);
      });
  };
  
  return { doRegister, error, setError };
  
};