import React from "react";
import { Link } from "react-router-dom";
import { IoLogoGoogle } from "react-icons/io";
import { signInWithGoogle } from "../../services/firebase";

import "./styles.css";

const Login = () => {
  return (
    <div id="page-login">
      <header>
        <img
          id="logo"
          src={require("../../assets/logo.svg")}
          alt="Sync Drive"
        />
      </header>

      <main>
        <a onClick={signInWithGoogle}>
          <IoLogoGoogle size={32} />
          <p>Entrar com o Google</p>
        </a>
      </main>
    </div>
  );
};

export default Login;
