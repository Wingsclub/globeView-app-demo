import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './src/navigator/AppNavigator';
import {  FavoritesProvider } from './src/context/FavoritesContext';

const App = () => {
  useEffect(() => {
      SplashScreen.hide();
  }, []);

  return (
<FavoritesProvider>
  <AppNavigator/>
</FavoritesProvider>
  ) 
};

export default App;
