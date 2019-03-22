import React, { Component } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Picker from '../../components/Picker';
import ItemList from './components/ItemList';

import {
  getCurrencies, changeBaseCurrency, addCurrencyToFavorites, removeCurrencyFromFavorites
} from '../../actions/currencies';

import styles from './styles';


class CurrenciesList extends Component {

  componentDidMount() {
    const { getCurrencies, baseCurrency } = this.props;
    getCurrencies({ base: baseCurrency });
  }

  componentDidUpdate(prevProps) {
    const { baseCurrency, getCurrencies } = this.props;
    if (baseCurrency && (prevProps.baseCurrency !== baseCurrency)) {
      getCurrencies({ base: baseCurrency });
    }
  }

  filterDataByMatches = ({ data, matches }) => {
    return Object.keys(data).filter(
      function (x) { return this.indexOf(x) < 0; },
      matches
    );
  }

  render() {
    const {
      loading,
      currencies,
      favorites,
      baseCurrency,
      changeBaseCurrency,
      addCurrencyToFavorites,
      removeCurrencyFromFavorites
    } = this.props;
    const currenciesArray = currencies ? Object.keys(currencies) : [];

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Picker
            data={currenciesArray}
            selected={baseCurrency}
            onSelect={name => changeBaseCurrency({ name })}
            pickerStyle={styles.pickerStyle}
          />
          {(!currencies || loading) && (
            <View style={styles.preloaderContainer}>
              <ActivityIndicator size={'small'} color={'orange'} />
            </View>
          )}
        </View>

        {(currencies) && (
          <ScrollView style={styles.listContainer}>
            <ItemList
              data={favorites}
              values={currencies}
              onPress={name => { removeCurrencyFromFavorites({ name }); }}
              bottomDivider
              type={'favorites'}
            />

            <ItemList
              data={this.filterDataByMatches({ data: currencies, matches: favorites })}
              values={currencies}
              onPress={name => { addCurrencyToFavorites({ name }); }}
              bottomDivider
            />
          </ScrollView>
        )}
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
    getCurrencies,
    changeBaseCurrency,
    addCurrencyToFavorites,
    removeCurrencyFromFavorites
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(CurrenciesList);
