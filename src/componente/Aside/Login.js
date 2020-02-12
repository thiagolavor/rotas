import React from 'react'
import './Main.css'
import {Link} from 'react-router-dom'

const  Login = ()=> (
    <aside>
    <strong>Faça o seu login</strong>
    <form>
        <div className='input-block'>
            <label htmlFor='login'>Digite seu nome de usuário</label>
            <input type= "email" name="email"
            placeholder= "Digite seu e-mail"
            required/>
        </div> 

        <div className='input-block'>
            <label htmlFor='login'>Digite sua senha</label>
            <input type= "password" name="senha"
            placeholder= "Digite a sua senha"
            required/>
        </div>
       
        <button type="submit">Enviar</button>
    </form>
    <div className="links">
        <Link to="/cadastro">Cadastrar</Link>
        <Link to="/recuperar">Recuperar senha</Link>
    </div>

    </aside>
)

export default Login