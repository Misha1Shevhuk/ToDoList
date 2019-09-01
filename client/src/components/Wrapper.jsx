import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Menu from "./Menu/Menu";
import Content from "./Tasks/Content";

const Wrapper = () => (
  <BrowserRouter>
    <div className="wrapper">
      <Menu />
      <Route path="/project/:id" component={Content} />
    </div>
  </BrowserRouter>
);

export default Wrapper;
