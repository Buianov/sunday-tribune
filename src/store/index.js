import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import rootReducer from '../reducers';

export const history = createBrowserHistory();

const middlewaresList = [thunk, logger, routerMiddleware(history)];
const enhancers = compose(applyMiddleware(...middlewaresList));

const store = createStore(rootReducer(history), enhancers);

export default store;
