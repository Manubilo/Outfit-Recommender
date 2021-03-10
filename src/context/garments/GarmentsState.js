import React, { useReducer } from 'react';
import axios from 'axios';
import { baseURL } from '../../utils';
import {
  GARMENT_CREATE_SUCCESS,
  GARMENT_CREATE_FAIL,
  GARMENT_LIST_SUCCESS,
  GARMENT_LIST_FAIL,
  GARMENT_DELETE_SUCCESS,
  GARMENT_DELETE_FAIL,
} from '../types';
import GarmentsContext from './garmentsContext';
import garmentsReducer from './garmentsReducer';

const GarmentsState = (props) => {
  const initialState = {
    garmentsList: null,
  };

  const [state, dispatch] = useReducer(garmentsReducer, initialState);

  const listGarments = async () => {
    return axios
      .get(`${baseURL}/garment/list`, { params: { id: 1 } })
      .then((data) =>
        dispatch({
          type: GARMENT_LIST_SUCCESS,
          payload: data.data.body.garments,
        })
      );
  };

  const updateGarmentsList = (list) => {
    dispatch({
      type: GARMENT_LIST_SUCCESS,
      payload: list,
    });
  };

  const createGarment = async (garmentName, garmentType) => {
    const config = {
      'Content-Type': 'application/json',
    };

    const body = {
      id: 1,
      name: garmentName,
      type: garmentType,
      moods: [],
    };

    axios
      .post(`${baseURL}/garment/create`, body, config)
      .then(() => listGarments());
  };

  const deleteGarment = async (idGarment) => {
    console.log('idGarment', idGarment);
    axios
      .delete(`${baseURL}/garment/delete`, {
        data: { id: idGarment },
      })
      .then((res) => listGarments());
  };

  return (
    <GarmentsContext.Provider
      value={{
        garmentsList: state.garmentsList,
        listGarments,
        createGarment,
        updateGarmentsList,
        deleteGarment,
      }}
    >
      {props.children}
    </GarmentsContext.Provider>
  );
};

export default GarmentsState;
