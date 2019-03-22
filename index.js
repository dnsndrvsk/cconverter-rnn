import { Navigation } from 'react-native-navigation';
import { pushMainScreen } from 'src/navigation';


console.disableYellowBox = true;

Navigation.events().registerAppLaunchedListener(() => pushMainScreen());
