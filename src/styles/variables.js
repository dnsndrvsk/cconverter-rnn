import { Dimensions } from 'react-native';


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const localWidth = (screenWidth >= screenHeight) ? screenHeight : screenWidth;
const widthCoef = localWidth / 390;

export const scale = (size) => widthCoef * size;
export const deviceWidth = screenWidth;
export const deviceHeight = screenHeight;

const variables = {
  fontSize: {
    xx_small: (localWidth * 10) / 360,
    x_small: (localWidth * 11) / 360,
    small: (localWidth * 13) / 360,
    regular: (localWidth * 15) / 360,
    large: (localWidth * 17) / 360,
    extraLarge: (localWidth * 32) / 360
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
  },
  shadowSmall: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
  },
  shadowBig: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 20,
  }
};

export default variables;
