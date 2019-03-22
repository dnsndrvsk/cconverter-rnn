import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text } from 'react-native';

import CurrencyInputSelect from '../../components/CurrencyInputSelect';
import NavigationButton from '../../components/NavigationButton';

import { CURRENCIES_SCREEN } from '../../navigation';

import { getConvertedCurrencies, getCurrencies } from '../../actions/currencies';

import config from '../../config';

import styles from './styles';


class Converter extends Component {

  state = {
    baseAmount: 0,
    baseCurrency: 'USD',
    comparedAmount: 0,
    comparedCurrency: 'RUB'
  };

  componentDidMount() {
    if (!this.props.currencies) {
      this.props.getCurrencies({ base: this.state.baseCurrency });
    }
    this.props.getConvertedCurrencies({ base: this.state.baseCurrency });
  }

  componentDidUpdate(prevProps) {
    const { convertCurrency } = this.props;
    if (convertCurrency && (prevProps.convertCurrency !== convertCurrency)) {
      this.calculate({ });
    }
  }

  changeBaseAmount = value => {
    if (value) {
      this.setState({ baseAmount: value });
      this.calculate({ baseValue: value });
    } else {
      this.setState({ baseAmount: value, comparedAmount: 0 });
    }
  }

  changeComparedAmount = value => {
    if (value) {
      this.setState({ comparedAmount: value });
      this.calculate({ comparedValue: value });
    } else {
      this.setState({ comparedAmount: value, baseAmount: 0 });
    }
  }

  changebaseCurrency = value => {
    this.setState({ baseCurrency: value });
    this.props.getConvertedCurrencies({ base: value });
  }

  changecomparedCurrency = value => {
    this.setState({ comparedCurrency: value });
    this.calculate({ selectedCurrency: value });
  }

  calculate = ({ baseValue, comparedValue, selectedCurrency }) => {
    const { convertedCurrencies } = this.props;
    const { baseAmount, comparedAmount, comparedCurrency } = this.state;
    const currency = selectedCurrency ? selectedCurrency : comparedCurrency;
    const bValue = baseValue ? baseValue : baseAmount;
    const cValue = comparedValue ? comparedValue : comparedAmount;
    if (convertedCurrencies) {
      if (comparedValue) {
        const result = cValue / convertedCurrencies[currency];
        this.setState({ baseAmount: Number(result).toFixed(2) });
      } else {
        const result = bValue * convertedCurrencies[currency];
        this.setState({ comparedAmount: Number(result).toFixed(2) });
      }
    }
  }

  render() {
    const { currencies, componentId } = this.props;
    const { baseAmount, comparedAmount, baseCurrency, comparedCurrency } = this.state;
    const currenciesArray = currencies ? Object.keys(currencies) : [];

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{config.appName}</Text>
        </View>
        <View style={styles.inputs}>
          <CurrencyInputSelect
            data={currenciesArray}
            value={baseAmount}
            selected={baseCurrency}
            onChangeText={this.changeBaseAmount}
            onSelect={this.changebaseCurrency}
          />
          <CurrencyInputSelect
            data={currenciesArray}
            onChangeText={this.changeComparedAmount}
            onSelect={this.changecomparedCurrency}
            value={comparedAmount}
            selected={comparedCurrency}
          />
        </View>
        <NavigationButton
          buttonTitle={'View currency list'}
          componentId={componentId}
          screenName={CURRENCIES_SCREEN}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.currenciesReducer,
  ...state.userReducer
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getConvertedCurrencies,
    getCurrencies
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Converter);
