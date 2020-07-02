import React from "react";
import { Link } from "react-router-dom";
import { IoLogoGoogle } from "react-icons/io";
// import { v4 as uuid } from "uuid";

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
        <Link to="/choose-folder">
          <IoLogoGoogle size={32} />
          <p>Entrar com o Google</p>
        </Link>
      </main>
    </div>
  );
};

export default Login;
