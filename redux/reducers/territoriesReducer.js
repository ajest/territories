import { GET_TERRITORIES_SUCCESS } from '../constants/constants';

const initialState = {
  territories: [],
};

const territoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TERRITORIES_SUCCESS:
      return {
        ...state,
        territories: [],
      };

    default:
      return state;
  }
};

export default territoriesReducer;
