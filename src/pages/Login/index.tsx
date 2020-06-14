import React from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle, MdVpnKey } from "react-icons/md";

import "./styles.css";

const Login = () => {
  return (
    <div id="page-login">
      <div className="content">
        <header>
          <img
            id="logo"
            src={require("../../assets/logo.svg")}
            alt="Sync Drive"
          />
        </header>

        <form>
          <fieldset>
            <div className="field-group">
              <div className="field">
                <div>
                  <MdAccountCircle color="#282A36" size={40} />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                />
              </div>

              <div className="field">
                <div>
                  <MdVpnKey color="#282A36" size={40} />
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
            </div>
          </fieldset>
          <Link to="/choose-folder">
            <button type="submit">
              <p>Entrar</p>
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
