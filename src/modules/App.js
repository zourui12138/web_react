import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { browserHistory } from 'react-router'

class App extends Component {
    handleClick(arg) {
        browserHistory.push(arg);
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div>
                    <button type='button' onClick={this.handleClick.bind(this,'/about')}>about</button>
                    <button type='button' onClick={this.handleClick.bind(this,'/inbox')}>inbox</button>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default App;
