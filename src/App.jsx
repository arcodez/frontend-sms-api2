import React, { Fragment, useContext } from "react";
//Context
import { Context } from "./context/Context";
import { Router } from "@reach/router";
//Pages
import { Login } from "./pages/Login";
import { NoRegisteredUser } from "./pages/NoRegisteredUser";
import { Send } from "./pages/Send";
import { Twilio } from "./pages/Send/Twilio";
import { Nexmo } from "./pages/Send/Nexmo";
import { TextLocal } from "./pages/Send/TextLocal";

function App() {
  const { isAuth } = useContext(Context);
  return (
    <Fragment>
      {/* Rutas Libres */}
      <Router></Router>

      {/* Autenticacion de Usuarios */}
      {isAuth ? (
        <Router>
          <Send path="/" />
          {/* Lista de Apis */}
          <Twilio path="/twilio" />
          <Nexmo path="/nexmo" />
          <TextLocal path="/textlocal" />
        </Router>
      ) : (
        // Validacion de Todas las Rutas
        <Router>
          <Login path="/" />
          <NoRegisteredUser path="/sms" />
          <NoRegisteredUser path="/twilio" />
          <NoRegisteredUser path="/nexmo" />
          <NoRegisteredUser path="/textlocal" />
        </Router>
      )}
    </Fragment>
  );
}

export default App;
