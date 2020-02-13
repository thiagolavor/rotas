import React from "react";
import Home from "./componente/Home";
import Contato from "./componente/Contato";
import Sobre from "./componente/Sobre";
import Login from "./componente/Login";
import Cadastro from "./componente/Cadastro";
import Recuperar from "./componente/Recuperar";

import { Switch, Route } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/login" component={Login} />
    <Route path="/sobre" component={Sobre} />
    <Route path="/contato" component={Contato} />
    <Route path="/casdastro" component={Cadastro} />
    <Route path="/recuperar" component={Recuperar} />
  </Switch>
);

export default Routes;
