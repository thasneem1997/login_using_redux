import axios from 'axios';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from './types';

export const login = (username, password) => async dispatch => {
  dispatch({ type: USER_LOGIN_REQUEST });

  try {
    const { data } = await axios.post('/api/auth/login', { username, password });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

