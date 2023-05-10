import { useContext, useEffect, useState } from "react";
import { UserContext } from "../userContext";


export const useLogin = () => {
  const {authToken, setAuthToken} = useContext(UserContext);
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
        if (resposta ) {
          setAuthToken(resposta.token);
          console.log(authToken);
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