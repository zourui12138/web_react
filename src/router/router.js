import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from '../modules/App';
import About from '../modules/About';
import Inbox from '../modules/Inbox';

export default class MyRouter extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <Route path="about" component={About} />
                    <Route path="inbox" component={Inbox} />
                </Route>
            </Router>
        );
    }
}
