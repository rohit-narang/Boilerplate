import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/home'
import About from './containers/about'


export default (
    <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/about-us" component={About} />
    </div>
);