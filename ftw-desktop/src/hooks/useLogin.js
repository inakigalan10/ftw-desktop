import { UserContext } from "../userContext";
import { useEffect, useContext } from "react";

export const useLogin = () => {

    let { usuari, authToken, setAuthToken } = useContext(UserContext);

   

    const doLogin = async (login) => {

        try {
            console.log("hola")
            const data = await fetch("http://127.0.0.1:8000/login/", {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify(login),
            });
            const resposta = await data.json();
            if (resposta != null) {
            localStorage.setItem('authToken',JSON.stringify(resposta.authToken))
              setAuthToken(resposta.authToken);
              console.log("ZzZZZZZzzZzZZZzz")
              setUserId (data.user.id)
              console.log(data.user.id)
              setEmail(login.email)

            } else {
              setError(resposta.message);
            }
          } catch {
            setError("Network error");
          }

    }

    return {doLogin};
}