import React, { useEffect } from 'react';
import {
  SafeAreaView, StyleSheet, ScrollView, RefreshControl
} from 'react-native';
import { Provider } from 'react-redux';
import EventSource, { EventSourceListener } from "react-native-sse";
import AppHeader from './components/AppHeader/AppHeader';
import { BatteryWidget, InverterWidget, SolarWidget, UtilityWidget } from './components/Widgets';
import { LocaleContext } from './i18n/LocaleContext';
import LocaleService from './i18n/LocaleService';
import { store } from './redux/';
import { ThemeColors } from './styles/global.style';
import { DataRecord } from './types/store.types';
import { fetchBatteryData } from './redux/actions/battery.actions';
import { fetchInverterData } from './redux/actions/inverter.actions';
import { fetchSolarData } from './redux/actions/solar.actions';
import { fethGridData } from './redux/actions/grid.actions';
import { getInverterConfigs } from './redux/actions/config.actions';

const language = 'eng';
const messageService = LocaleService(language);

const App = () => {

  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    const es = new EventSource("https://55c6-112-134-159-153.in.ngrok.io/stream");

    const listener: EventSourceListener = (event) => {
      if (event.type === 'message') {
        const data = JSON.parse(event.data || "") as DataRecord
        store.dispatch(fetchBatteryData(data.battery))
        store.dispatch(fetchInverterData(data.inverter))
        store.dispatch(fetchSolarData(data.pv))
        store.dispatch(fethGridData(data.grid))
      }

      if (event.type === 'open') { console.log("SSE connection opened.") }
      if (event.type === 'error') { console.log("SSE connection error.", event.message) }
      if (event.type === 'exception') { console.log("SSE exeception.", event.message, event.error) }
      if (event.type === 'close') { console.log("SSE connection closed.") }
    }

    es.addEventListener("open", listener);
    es.addEventListener("message", listener);
    es.addEventListener("error", listener);
    es.addEventListener("close", listener);

    store.dispatch(getInverterConfigs())

    return () => {
      es.removeAllEventListeners();
      es.close();
    }
  }, [])

  return (
    <Provider store={store}>
      <LocaleContext.Provider value={messageService}>
        <SafeAreaView style={styles.container}>
          <AppHeader />
          <ScrollView refreshControl={<RefreshControl colors={[ThemeColors.GREEN, ThemeColors.ORANGE, ThemeColors.GRAY]} refreshing={refreshing} onRefresh={onRefresh} />}>
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
    backgroundColor: ThemeColors.LIGHT,
  }
})

export default App;
