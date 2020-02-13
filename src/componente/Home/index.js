import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <h1>Bem-Vindo!</h1>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/contato">Contato</Link>
      <Link to="/sobre">Sobre Nós</Link>
    </div>
  </header>
);

export default Header;
