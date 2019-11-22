import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Nav';
import * as serviceWorker from './serviceWorker';
import Home from './Home';

ReactDOM.render(<Nav />, document.getElementById('header'));
ReactDOM.render(<Home />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
