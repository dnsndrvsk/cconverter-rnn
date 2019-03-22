import initialState from '../../store/initialState';
import injectReducer from '../../store/injectReducer';
import {
  ADD_CURRENCY_TO_FAVORITES,
  REMOVE_CURRENCY_FROM_FAVORITES
} from '../../store/actionTypes';


const handlers = {
  [ADD_CURRENCY_TO_FAVORITES]: (state, { payload }) => ({
    ...state,
    favorites: [payload.name, ...state.favorites]
  }),
  [REMOVE_CURRENCY_FROM_FAVORITES]: (state, { payload }) => {
    const index = state.favorites.indexOf(payload.name);
    const favorites = [...state.favorites];
    favorites.splice(index, 1);

    return {
      ...state,
      favorites
    };
  },
};

export default injectReducer(initialState.userReducer, handlers);
