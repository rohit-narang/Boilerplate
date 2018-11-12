import React, {lazy} from 'react';
import { Route } from 'react-router-dom';
import App from './containers/App/App'
import About from './containers/About'

const Login = lazy(() => import('./containers/Login'));


export default (
    <div>
    <Route exact path="/" component={App} />
    <Route exact path="/about-us" component={About} />
    <Route exact path="/login" component={Login} />
    </div>
);