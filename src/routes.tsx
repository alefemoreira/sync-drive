import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import ChooseFolder from "./pages/ChooseFolder";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/" exact />
      <Route component={ChooseFolder} path="/choose-folder" />
    </BrowserRouter>
  );
};

export default Routes;
