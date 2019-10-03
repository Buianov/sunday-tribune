import {
  OPEN_ARTICLE,
  CLOSE_ARTICLE,
  FETCH_COMMENTS_START,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from '../constants';

import { fetch } from '../helpers/rest';

export const openArticle = data => dispatch => {
  dispatch({ type: OPEN_ARTICLE, data: data });
};

export const closeArticle = () => dispatch => {
  dispatch({ type: CLOSE_ARTICLE });
};

export const showComments = id => async dispatch => {
  dispatch({ type: FETCH_COMMENTS_START });
  try {
    const resp = await fetch(`comments/?postId=${id}`);
    dispatch({ type: FETCH_COMMENTS_SUCCESS, data: resp.data });
  } catch (err) {
    dispatch({ type: FETCH_COMMENTS_FAILURE, error: true, data: err });
  }
};
