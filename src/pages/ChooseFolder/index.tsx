import React, { FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import { MdFolderOpen, MdArrowBack, MdSync } from "react-icons/md";

import "./styles.css";

const ChooseFolder = () => {
  const history = useHistory();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log("HELLO");
    history.push("/syncing");
  }

  return (
    <div id="page-choose-folder">
      <header>
        <img
          src={require("../../assets/logo.svg")}
          alt="Sync Drive"
          width="150px"
        />
      </header>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <input name="path" id="name" type="text" placeholder="Path" />
          <button type="button">
            <MdFolderOpen size={24} color="#282a36" />
            Browse
          </button>
        </div>
        <div className="buttons">
          <Link to="/">
            <MdArrowBack size={24} color="#282a36" />
            Voltar
          </Link>
          <button type="submit">
            <MdSync size={24} color="#f8f8f2" />
            Syncronizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChooseFolder;
