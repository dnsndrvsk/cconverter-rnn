import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Picker } from 'react-native';

import styles from './styles';


export default class PickerComponent extends Component {

  render() {
    const { data, selected, onSelect, pickerStyle } = this.props;

    return (
      <Picker
        mode={'dropdown'}
        selectedValue={selected}
        style={[styles.pickerStyle, pickerStyle]}
        onValueChange={name => onSelect(name)}
      >
        {data.map(x => (<Picker.Item key={x} label={x} value={x} />))}
      </Picker>
    );
  }
}

PickerComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.string,
  onSelect: PropTypes.func,
  pickerStyle: PropTypes.object
};
