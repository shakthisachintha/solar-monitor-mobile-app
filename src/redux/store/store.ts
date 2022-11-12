import {configureStore} from '@reduxjs/toolkit';
import { IAppState } from '../../types/store.types';
import {
  authReducer,
  batteryReducer,
  configReducer,
  gridReducer,
  inverterReducer,
  solarReducer,
} from '../reducers';

export const store = configureStore<IAppState>({
  reducer: {
    auth: authReducer,
    battery: batteryReducer,
    grid: gridReducer,
    solar: solarReducer,
    inverter: inverterReducer,
    config: configReducer
  },
});
