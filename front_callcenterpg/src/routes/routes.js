import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Choose from './../components/componentChoose/Choose';
import Select from './../components/componentSelect/Select';
import Update from '../pages/Monitorang/Update/Update';
import Create from '../pages/Monitorang/Create/Create';

const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Choose} />
            <Route exact path="/painel" component={Select} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/update/:_id" component={Update} />


        </Switch>
    </BrowserRouter>

);

export default Routes;