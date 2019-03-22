// @flow

import React from 'react';
import { Navigation } from 'react-native-navigation';

import {
  ConverterScreen,
  CurrenciesScreen
} from 'src/screens';
import Provider from '../provider';

import {
  CONVERTER_SCREEN,
  CURRENCIES_SCREEN
} from './Screens';


function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider>
        <Component
          {...props}
        />
      </Provider>
    );

    return <EnhancedComponent />;
  };
}

export default function () {
  Navigation.registerComponent(CONVERTER_SCREEN, () => WrappedComponent(ConverterScreen));
  Navigation.registerComponent(CURRENCIES_SCREEN, () => WrappedComponent(CurrenciesScreen));
  console.info('All screens have been registered...');
}
