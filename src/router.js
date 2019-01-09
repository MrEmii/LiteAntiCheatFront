import React from 'react';
import {Route, Switch} from 'react-router-dom';

import App from './components/App'
import Home from './components/pages/Home';
import Blog from './components/pages/blog/Blog';

const AppRoute = () => 
    <App>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/blog" component={Blog}/>
        </Switch>
    </App>;

export default AppRoute;