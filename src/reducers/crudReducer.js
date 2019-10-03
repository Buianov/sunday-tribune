import { FETCH_DATA_SUCCESS } from '../constants';

const initialState = {};

const crudReducer = (state = initialState, { type, data, entity, error }) => {
  switch (type) {
    case FETCH_DATA_SUCCESS:
      return { ...state, [entity]: data };

    default:
      return state;
  }
};

export default crudReducer;
