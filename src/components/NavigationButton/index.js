import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
import { Button } from 'react-native-elements';

import styles from './styles';


export default class NavigationButton extends Component {

  handleGetStartAction = () => {
    const { componentId, screenName, screenType, TopBarTitle } = this.props;

    Navigation.push(componentId, {
      component: {
        name: screenName,
        passProps: { screenType: screenType || 'Tab' },
        options: {
          topBar: {
            title: { text: TopBarTitle || 'Back' }
          }
        }
      }
    });
  };


  render() {
    const { buttonTitle, buttonStyle, buttonContainerStyle } = this.props;

    return (
      <Button
        onPress={this.handleGetStartAction}
        title={buttonTitle}
        buttonStyle={[styles.button, buttonStyle]}
        containerStyle={[styles.container, buttonContainerStyle]}
      />
    );
  }
}

NavigationButton.propTypes = {
  TopBarTitle: PropTypes.string,
  buttonTitle: PropTypes.string.isRequired,
  buttonStyle: PropTypes.object,
  buttonContainerStyle: PropTypes.object,
  screenName: PropTypes.string.isRequired,
  screenType: PropTypes.string,
  componentId: PropTypes.string.isRequired
};
