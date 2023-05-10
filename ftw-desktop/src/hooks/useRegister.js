import { UserContext } from "../userContext";
import { useEffect, useContext, useState } from "react";

export const useSignUp = () => {

  // Obtenemos las variables necesarias del contexto
  let { usuari, token, setAuthToken } = useContext(UserContext);
  
  // Definimos una variable de estado para manejar errores
  const [error,setError] = useState("");

  // Función para realizar el inicio de sesión
  const doSignUp = async (signUp) => {
    try {
      const data = await fetch("http://127.0.0.1:8000/signup/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(signUp),
      });

      const resposta = await data.json();

      // Si la respuesta es exitosa, guardamos el token en localStorage y en el contexto
      if (resposta && resposta.token) {
        localStorage.setItem('token',JSON.stringify(resposta.token))
        setAuthToken(resposta.token);
      } else {
        // Si la respuesta no es exitosa, establecemos el mensaje de error
        setError(resposta.message);
      }
    } catch {
      // Si ocurre un error, establecemos el mensaje de error
      setError("Network error");
    }
  }

  // Retornamos las funciones y variables necesarias
  return {doSignUp, error, setError };
}
