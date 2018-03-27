import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import MyRouter from './router/router'

ReactDOM.render(<MyRouter />, document.getElementById('root'));

registerServiceWorker();
