import {
  CHANGE_BASE_CURRENCY,
  GET_CURRENCIES,
  ADD_CURRENCY_TO_FAVORITES,
  REMOVE_CURRENCY_FROM_FAVORITES,
  GET_CONVERTED_CURRENCIES
} from '../../store/actionTypes';


export const changeBaseCurrency = ({ name }) => ({
  type: CHANGE_BASE_CURRENCY,
  payload: { name }
});

export const getCurrencies = ({ base }) => ({
  type: GET_CURRENCIES,
  method: 'GET',
  url: `/latest?base=${base}`
});

export const addCurrencyToFavorites = ({ name }) => ({
  type: ADD_CURRENCY_TO_FAVORITES,
  payload: { name }
});

export const removeCurrencyFromFavorites = ({ name }) => ({
  type: REMOVE_CURRENCY_FROM_FAVORITES,
  payload: { name }
});

export const getConvertedCurrencies = ({ base }) => ({
  type: GET_CONVERTED_CURRENCIES,
  method: 'GET',
  url: `/latest?base=${base}`
});
