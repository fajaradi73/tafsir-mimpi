import { createStackNavigator, createAppContainer, CardStackStyleInterpolator } from "react-navigation";
import { fromLeft, fromRight } from 'react-navigation-transitions';
import BukuMimpi from './components/BukuMimpi.js';

const AppNavigator = createStackNavigator(
  {
    BukuMimpi : BukuMimpi,
  },
  {
    initialRouteName: "BukuMimpi",
    transitionConfig: () => fromRight(),
  },
);
export default createAppContainer(AppNavigator);