import React from 'react';
import {
  SafeAreaView, StyleSheet, Dimensions, View, Text, ScrollView
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { Provider } from 'react-redux';
import AppHeader from './components/AppHeader/AppHeader';
import { BatteryWidget, InverterWidget, SolarWidget, UtilityWidget } from './components/Widgets';
import { LocaleContext } from './i18n/LocaleContext';
import LocaleService from './i18n/LocaleService';
import { store } from './redux/';
import WelcomeScreen from './screens/welcome/WelcomeScreen';

const language = 'eng';
const messageService = LocaleService(language);

const App = () => {
  return (
    <Provider store={store}>
      <LocaleContext.Provider value={messageService}>
        <SafeAreaView style={{
          backgroundColor: "#fff",
          flex: 1,
        }}>

          <AppHeader />
          <ScrollView>
            <BatteryWidget />
            <SolarWidget />
            <InverterWidget />
            <UtilityWidget />
            <BatteryWidget />
            <SolarWidget />
            <InverterWidget />
            <UtilityWidget />
          </ScrollView>

        </SafeAreaView>
      </LocaleContext.Provider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
})

export default App;
