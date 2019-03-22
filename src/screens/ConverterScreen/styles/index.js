import { StyleSheet } from 'react-native';

import { MAIN_BG_COLOR } from '../../../styles/constants';
import variables, { scale } from '../../../styles/variables';


const { large } = variables.fontSize;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: scale(10),
    backgroundColor: MAIN_BG_COLOR
  },
  inputs: {
    marginBottom: scale(30),
    paddingHorizontal: scale(20)
  },
  title: {
    padding: scale(10),
    fontSize: large,
    textAlign: 'center'
  },
  buttonContainer: {
    alignItems: 'center'
  },
  button: {
    width: '50%'
  }
});
