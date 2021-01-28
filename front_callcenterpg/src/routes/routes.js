import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Choose from './../components/choose/choose';
import Panel from './../components/panel/panel';

const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Choose} />
            <Route exact path="/painel" component={Panel} />
        </Switch>
    </BrowserRouter>

);

export default Routes;