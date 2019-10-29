import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    // <App />, 
    <BrowserRouter history={BrowserRouter}>
        <Route path="/" component={App}/>
    </BrowserRouter>,

    document.getElementById('root')
);
registerServiceWorker();
