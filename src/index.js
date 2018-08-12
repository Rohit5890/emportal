import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//import root reducer 
import _rootReducer from '../src/reducers/reducers_rootReducer'

const _store = createStore(_rootReducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={_store}>
    <App />
</Provider>, document.getElementById('root'));
// registerServiceWorker();
