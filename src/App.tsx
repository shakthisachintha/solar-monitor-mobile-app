import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/';
import WelcomeScreen from './screens/welcome/WelcomeScreen';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <WelcomeScreen></WelcomeScreen>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
