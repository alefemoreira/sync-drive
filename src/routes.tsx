import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import ChooseFolder from "./pages/ChooseFolder";
import Syncing from "./pages/Syncing";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/" exact />
      <Route component={ChooseFolder} path="/choose-folder" />
      <Route component={Syncing} path="/syncing" />
    </BrowserRouter>
  );
};

export default Routes;
