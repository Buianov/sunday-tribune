import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../constants';
import { fetch } from '../helpers/rest';

export const fetchData = entity => async dispatch => {
  dispatch({ type: FETCH_DATA_START });

  try {
    let data = await fetch(entity);
    dispatch({ type: FETCH_DATA_SUCCESS, data: data.data, entity: entity });
  } catch (err) {
    dispatch({ type: FETCH_DATA_FAILURE, data: err, error: true });
  }
};
