import { createStackNavigator, createAppContainer, CardStackStyleInterpolator } from "react-navigation";
import { fromLeft, fromRight } from 'react-navigation-transitions';
import BukuMimpi from './components/BukuMimpi.js';
import MenuUtama from './components/MenuUtama.js';

const AppNavigator = createStackNavigator(
  {
    BukuMimpi : BukuMimpi,
    MenuUtama : MenuUtama,
  },
  {
    initialRouteName: "MenuUtama",
    transitionConfig: () => fromRight(),
  },
);
export default createAppContainer(AppNavigator);