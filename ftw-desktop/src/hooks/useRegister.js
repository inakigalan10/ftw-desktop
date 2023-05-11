import { useContext, useEffect, useState } from "react";
import { UserContext } from "../userContext";


export const useRegister = () => {
  const {authToken, setAuthToken} = useContext(UserContext);
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
          setAuthToken(resposta.token);
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