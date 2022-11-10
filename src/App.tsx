import React, { useEffect } from 'react';
import {
  SafeAreaView, StyleSheet, ScrollView
} from 'react-native';
import { Provider } from 'react-redux';
import EventSource from "react-native-sse";
import AppHeader from './components/AppHeader/AppHeader';
import { BatteryWidget, InverterWidget, SolarWidget, UtilityWidget } from './components/Widgets';
import { LocaleContext } from './i18n/LocaleContext';
import LocaleService from './i18n/LocaleService';
import { store } from './redux/';

const language = 'eng';
const messageService = LocaleService(language);

const App = () => {
  useEffect(() => {
    const es = new EventSource("https://3c71-175-157-164-182.in.ngrok.io/stream");

    es.addEventListener("open", (event) => {
      console.log("Open SSE connection.");
    });

    es.addEventListener("message", (event) => {
      console.log("New message event:", event.data);
    });

    es.addEventListener("error", (event) => {
      if (event.type === "error") {
        console.error("Connection error:", event.message);
      } else if (event.type === "exception") {
        console.error("Error:", event.message, event.error);
      }
    });

    es.addEventListener("close", (event) => {
      console.log("Close SSE connection.");
    });
  }, []);

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
