import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from '../modules/App';

export default class MyRouter extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}/>
            </Router>
        );
    }
}
