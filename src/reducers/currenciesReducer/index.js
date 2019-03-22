import initialState from '../../store/initialState';
import injectReducer from '../../store/injectReducer';
import {
  GET_CURRENCIES,
  CHANGE_BASE_CURRENCY,
  GET_CONVERTED_CURRENCIES
} from '../../store/actionTypes';


const handlers = {
  [`${GET_CURRENCIES}_REQUEST`]: state => ({
    ...state,
    loading: true
  }),
  [`${GET_CURRENCIES}_SUCCESS`]: (state, { payload }) => ({
    ...state,
    loading: false,
    currencies: payload.rates,
    baseCurrency: payload.base
  }),
  [`${GET_CURRENCIES}_FAILURE`]: state => ({
    ...state,
    loading: false
  }),
  [CHANGE_BASE_CURRENCY]: (state, { payload }) => ({
    ...state,
    baseCurrency: payload.name
  }),
  [`${GET_CONVERTED_CURRENCIES}_SUCCESS`]: (state, { payload }) => ({
    ...state,
    convertedCurrencies: payload.rates,
    convertCurrency: payload.base
  })
};

export default injectReducer(initialState.currenciesReducer, handlers);
