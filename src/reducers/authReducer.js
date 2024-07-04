import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
  } from '../actions/types';
  
  const initialState = {
    loading: false,
    user: null,
    error: null,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return { ...state, loading: true };
      case USER_LOGIN_SUCCESS:
        return { ...state, loading: false, user: action.payload };
      case USER_LOGIN_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }
  