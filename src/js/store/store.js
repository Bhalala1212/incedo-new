import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import allReducers from "../reducers/rootReducer";
import {createLogger} from 'redux-logger';

// const updatedApplyMiddleware = Config.NODE_ENV == "development" ? applyMiddleware(thunk, promise, createLogger()) : applyMiddleware(thunk, promise)
const updatedApplyMiddleware =  applyMiddleware(thunk, promise, createLogger()) 
const store = createStore(
    allReducers,
    updatedApplyMiddleware
);

export default store;