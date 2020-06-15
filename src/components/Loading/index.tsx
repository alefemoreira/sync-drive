import React from "react";

import "./styles.css";

const Loading = () => {
  return (
    <div id="component-loading">
      {/* <div id="s">
        <img src={require("../../assets/s.svg")} alt="" />
      </div> */}
      <div id="sync">
        <img src={require("../../assets/sync.svg")} alt="" />
      </div>
      <p>Carregando...</p>
    </div>
  );
};

export default Loading;
