import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Choose from './../components/componentChoose/Choose';
import Select from './../components/componentSelect/Select';
// import Panel from './../components/componentPanel/Panel'

const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Choose} />
            <Route exact path="/painel" component={Select} />
        </Switch>
    </BrowserRouter>

);

export default Routes;