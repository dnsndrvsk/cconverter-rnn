import axios from 'react-native-axios';

import config from '../config';


export default store => next => action => {
  if (action.url) {
    const { url, method, payload, ...rest } = action;

    next({
      ...rest,
      type: `${rest.type}_REQUEST`,
      url,
      method,
      payload
    });

    const headers = {
      'Content-Type': 'application/json'
    };

    axios({
      url: /^(https?:\/\/)/.test(url) ? url : `${config.apiUrl}${url}`,
      method: method || 'GET',
      data: payload,
      headers: {
        ...headers,
        ...action.headers
      }
    }).then(response => {
      if (response.status >= 400) throw response.data;

      return next({
        ...rest,
        type: `${rest.type}_SUCCESS`,
        payload: response.data
      });
    }).catch(error => {
      return next({
        ...rest,
        type: `${rest.type}_FAILURE`,
        errorMessage: error.error,
        error
      });
    });
  } else {
    return next(action);
  }
};
