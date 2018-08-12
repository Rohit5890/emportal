import {combineReducers} from 'redux';
import apiDataReducer from './reducers_apiDataReducer';

const _rootReducer =  combineReducers({
    empData: apiDataReducer
})

export default _rootReducer;