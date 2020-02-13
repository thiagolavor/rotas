import React from "react";
import { Link } from "react-router-dom";

const Recuperar = () => (
  <aside>
    <strong>Recuperar a senha</strong>
    <form>
      <div className="input-block">
        <label htmlFor="login">Digite o seu email</label>
        <input
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          required
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
    <div className="links">
      <Link to="/">Voltar</Link>
    </div>
  </aside>
);

export default Recuperar;
