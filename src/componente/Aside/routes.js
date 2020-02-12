
import React from 'react'
import Login from './Login'
import Cadastro from './Cadastro'
import Recuperar from './Recuperar'


import { Switch, Route} from  'react-router-dom';


const  Routes = ()=> (
  
        <Switch>
            <Route path="/" component={Login}  exact/>
            <Route path="/casdastro" component={Cadastro}  exact/>
            <Route path="/recuperar" component={Recuperar}  exact/>
        </Switch>
  
)

export default Routes
