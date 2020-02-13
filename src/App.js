import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./componente/Header/Home";
import Routes from "./routes";

import "./App.css";

const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  </>
);

export default App;
