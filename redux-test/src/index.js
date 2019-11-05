import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import Reducer from './Reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)
ReactDOM.render(<Provider store={createStoreWithMiddleware(Reducer)}>
    <App/>
</Provider>, document.getElementById('root'));
serviceWorker.unregister();
