//Archivo para configurar y administar el contexto de los datos de autenticación
import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLiggedId: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };

  const logOutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLiggedId: userIsLoggedIn,
    login: loginHandler,
    logout: logOutHandler,
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;