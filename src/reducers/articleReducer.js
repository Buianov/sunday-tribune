import { OPEN_ARTICLE, CLOSE_ARTICLE, FETCH_COMMENTS_SUCCESS } from '../constants';

const initialState = {
  title: '',
  author: '',
  text: '',
  comments: [],
};

const articleReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case OPEN_ARTICLE:
      return {
        ...state,
        ...{
          title: data.title,
          author: data.author,
          text: data.text,
          comments: [],
        },
      };
    case CLOSE_ARTICLE:
      return initialState;
    case FETCH_COMMENTS_SUCCESS:
      return { ...state, comments: data };
    default:
      return state;
  }
};

export default articleReducer;
