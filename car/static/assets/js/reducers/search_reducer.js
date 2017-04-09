import merge from 'lodash/merge';

import { RECEIVE_SEARCH_PARAMS } from '../actions/search_actions';

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_PARAMS:
      return merge({}, action.searchParams);
    default:
      return state;
  }
};

export default searchReducer;
