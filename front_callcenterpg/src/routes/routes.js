import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Choose from './../components/componentChoose/Choose';
import Select from './../components/componentSelect/Select';
import Update from '../pages/Monitorang/Update';
// import Panel from './../components/componentPanel/Panel'

const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Choose} />
            <Route exact path="/painel" component={Select} />
            <Route exact path="/update/:param" component={Update} />

        </Switch>
    </BrowserRouter>

);

export default Routes;