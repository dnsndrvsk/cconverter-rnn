// @flow

import { Navigation } from 'react-native-navigation';

import {
  CONVERTER_SCREEN
} from './Screens';
import registerScreens from './registerScreens';

// Register all screens on launch
registerScreens();

export function pushMainScreen() {
  Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: '#039893'
      },
      title: {
        color: 'white',
      },
      backButton: {
        title: '', // Remove previous screen name from back button
        color: 'white'
      },
      buttonColor: 'white',
    },
    statusBar: {
      style: 'light'
    },
    layout: {
      orientation: ['portrait']
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow'
    },
    bottomTab: {
      textColor: 'gray',
      selectedTextColor: 'black',
      iconColor: 'gray',
      selectedIconColor: 'black',
    }
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: CONVERTER_SCREEN,
            options: {
              topBar: {
                visible: false, height: 0,
              },
              statusBar: {
                style: ''
              }
            }
          }
        }]
      }
    }
  });
}
