import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import axiosMiddleware from './axiosMiddleware';


const middlewareList = [
  axiosMiddleware
];

if (__DEV__) middlewareList.push(createLogger({ collapsed: true }));

export default applyMiddleware(...middlewareList, thunk);
