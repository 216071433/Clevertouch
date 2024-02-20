// store.js
import { createStore } from 'redux';

const initialState = {
  email: '',
  password: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload };
    case 'UPDATE_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
