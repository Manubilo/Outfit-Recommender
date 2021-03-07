import React, { useReducer } from 'react';
import axios from 'axios';
import { baseURL } from '../../utils';

import {
  MOOD_CREATE_SUCCESS,
  MOOD_CREATE_FAIL,
  MOOD_LIST_SUCCESS,
  MOOD_LIST_FAIL,
  MOOD_DELETE_SUCCESS,
  MOOD_DELETE_FAIL,
} from '../types';
import moodsReducer from './moodsReducer';
import MoodsContext from './moodsContext';

const MoodsState = (props) => {
  const initialState = {
    moodsList: null,
  };

  const [state, dispatch] = useReducer(moodsReducer, initialState);

  const listMoods = async () => {
    axios
      .get(`${baseURL}/mood/list`, { params: { id: 1 } })
      .then((data) => {
        dispatch({
          type: MOOD_LIST_SUCCESS,
          payload: data.data.body.moods,
        });
      })
      .catch((err) =>
        dispatch({
          type: MOOD_LIST_FAIL,
        })
      );
  };

  const createMood = async (mood) => {
    const config = {
      'Content-Type': 'application/json',
    };

    const body = {
      id: 1,
      moodName: mood,
    };

    axios
      .post('http://localhost:5000/mood/create', body, config)
      .then((res) => {
        dispatch({
          type: MOOD_CREATE_SUCCESS,
          payload: res.data,
        });
        listMoods();
      });
  };

  const deleteMood = async (idMood) => {
    axios
      .delete('http://localhost:5000/mood/delete', { data: { id: idMood } })
      .then((res) => listMoods());
  };

  return (
    <MoodsContext.Provider
      value={{
        moodsList: state.moodsList,
        listMoods,
        createMood,
        deleteMood,
      }}
    >
      {props.children}
    </MoodsContext.Provider>
  );
};

export default MoodsState;
