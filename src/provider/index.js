/**
 * cconverter App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';


export default class App extends Component {
  state = {
    loading: true,
    store: configureStore(() => this.setState({ loading: false }))
  };

  render() {
    if (this.state.loading) return null;

    return (
      <Provider store={this.state.store}>
        {this.props.children}
      </Provider>
    );
  }
}
