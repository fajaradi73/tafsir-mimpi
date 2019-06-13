import { createStackNavigator, createAppContainer, CardStackStyleInterpolator } from "react-navigation";
import { fromLeft, fromRight } from 'react-navigation-transitions';
import BukuMimpi from './components/BukuMimpi.js';
import MenuUtama from './components/MenuUtama.js';
import MenuGallery from './components/MenuGallery.js';
import Gallery from './components/Gallery.js';
import FullGambar from './components/FullGambar.js';



const AppNavigator = createStackNavigator(
  {
    BukuMimpi : BukuMimpi,
    MenuUtama : MenuUtama,
    MenuGallery : MenuGallery,
    Gallery : Gallery,
    FullGambar : FullGambar,
  },
  {
    initialRouteName: "MenuUtama",
    transitionConfig: () => fromRight(),
  },
);
export default createAppContainer(AppNavigator);