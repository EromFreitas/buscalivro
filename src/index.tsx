import 'react-native-gesture-handler';
import React from 'react';
import Routes from './navigation';
import {NavigationContainer} from '@react-navigation/native'
import { View, StatusBar} from 'react-native';

const App: React.FC = () => (
      <NavigationContainer>
         <StatusBar barStyle="light-content" backgroundColor='#f5f345' />
         <Routes />
      </NavigationContainer>
);

export default App;