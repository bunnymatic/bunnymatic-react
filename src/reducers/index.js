import { combineReducers } from 'redux';
import { FETCH_IMAGE, fetchImage } from '../actions/index.js';

const initialState = {
  images: [
  ]
};

var imageReducer = (state = initialState, action) => {

  switch(action.type) {
  case FETCH_IMAGE:
    return {...state, images: [...state.images, action.image] }
  default:
    return state;
  }
}

const rootReducer = combineReducers({ images: imageReducer });

export default rootReducer;
