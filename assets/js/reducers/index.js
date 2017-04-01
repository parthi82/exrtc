import { combineReducers } from 'redux';


const initialize = (state = {}, action) => {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export default combineReducers({
  initialize,
});
