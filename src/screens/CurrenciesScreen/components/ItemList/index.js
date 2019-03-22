import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

import styles from './styles';


export default class ItemList extends Component {

  render() {
    const { type, data, values, bottomDivider, onPress } = this.props;

    return (
      <ScrollView style={styles.container}>
        {data.map(x => (
          <ListItem
            key={x}
            title={x}
            subtitle={values[x].toFixed(2)}
            onPress={() => { onPress(x); }}
            rightIcon={type === 'favorites' && (
              <Icon
                name={'star'}
                type={'antdesign'}
                color={'orange'}
              />
            )}
            bottomDivider={bottomDivider}
          />
        ))}
      </ScrollView>
    );
  }
}

ItemList.propTypes = {
  type: PropTypes.string,
  data: PropTypes.array,
  values: PropTypes.object,
  bottomDivider: PropTypes.bool,
  onPress: PropTypes.func
};
