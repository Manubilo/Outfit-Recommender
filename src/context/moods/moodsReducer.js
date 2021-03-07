import {
  MOOD_CREATE_SUCCESS,
  MOOD_CREATE_FAIL,
  MOOD_LIST_SUCCESS,
  MOOD_LIST_FAIL,
  MOOD_DELETE_SUCCESS,
  MOOD_DELETE_FAIL,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case MOOD_LIST_SUCCESS:
      return {
        ...state,
        moodsList: action.payload,
      };
    case MOOD_LIST_FAIL:
      return {
        ...state,
        moodsList: null,
      };
    case MOOD_CREATE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case MOOD_CREATE_FAIL:
      return {
        ...state,
      };
    case MOOD_DELETE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case MOOD_DELETE_FAIL:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};
