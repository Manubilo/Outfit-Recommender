import {
  GARMENT_CREATE_SUCCESS,
  GARMENT_CREATE_FAIL,
  GARMENT_LIST_SUCCESS,
  GARMENT_LIST_FAIL,
  GARMENT_DELETE_SUCCESS,
  GARMENT_DELETE_FAIL,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GARMENT_LIST_SUCCESS:
      return {
        ...state,
        garmentsList: action.payload,
      };
    case GARMENT_LIST_FAIL:
      return {
        ...state,
        garmentsList: null,
      };
    case GARMENT_DELETE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case GARMENT_DELETE_FAIL:
      return {
        ...state,
      };
  }
};
