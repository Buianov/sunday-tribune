import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import crudReducer from './crudReducer';
import articleReducer from './articleReducer';

const rootReducer = history => {
  return combineReducers({
    router: connectRouter(history),
    crud: crudReducer,
    article: articleReducer,
  });
};

export default rootReducer;
