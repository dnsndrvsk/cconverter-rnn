import { StyleSheet } from 'react-native';

import variables, { scale } from '../../../styles/variables';
import { MAIN_BG_COLOR } from '../../../styles/constants';


const { regular } = variables.fontSize;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: MAIN_BG_COLOR
  },
  topContainer: {
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    width: '100%'
  },
  text: {
    padding: scale(10),
    fontSize: regular
  },
  preloaderContainer: {
    position: 'absolute',
    right: scale(30)
  },
  pickerStyle: {
    width: scale(150)
  }
});
