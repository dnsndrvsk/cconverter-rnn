import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'react-native-elements';

import Picker from '../Picker';


export default class CurrencyInputSelect extends Component {

  render() {
    const { data, value, selected, onChangeText, onSelect } = this.props;

    return (
      <Input
        value={String(value)}
        placeholder={'Amount...'}
        keyboardType={'numeric'}
        onChangeText={text => { onChangeText(text); }}
        rightIcon={
          <Picker
            data={data}
            selected={selected}
            onSelect={text => { onSelect(text); }}
          />
        }
      />
    );
  }
}

CurrencyInputSelect.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  onChangeText: PropTypes.func,
  onSelect: PropTypes.func,
  value: PropTypes.string,
  selected: PropTypes.string
};
