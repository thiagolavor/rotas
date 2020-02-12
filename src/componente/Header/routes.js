import React from 'react'
import Home from './Home'
import Contato from './Contato'
import Sobre from './Sobre'

import { Switch, Route} from  'react-router-dom';

const  Routes = ()=> (
  
        <Switch>
            <Route path="/" component={Home}  exact/>
            <Route path="/sobre" component={Sobre}  exact/>
            <Route path="/contato" component={Contato}  exact/>
        </Switch>
  
)

export default Routes