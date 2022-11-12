import {ChargerPriority, OutputPriority} from '.';

export interface IAppState {
  auth: AuthState,
  battery: BatteryState;
  grid: GridState;
  solar: SolarState;
  inverter: InverterState;
  config: InverterSettings;
}

export interface AuthState {
  isLogged: boolean,
  user: User | null
}

export interface BatteryState {
  voltage: number;
  current: number;
  chargePower: number;
  soc: number;
}

export interface User {
  name: string;
  email: string;
  id: number;
}

export interface GridState {
  voltage: number;
  inputCurrent: number;
  batteryChargeCurrent: number;
  frequency: number;
}

export interface InverterSettings {
  chargerPriority: ChargerPriority;
  outputPriority: OutputPriority;
  maxBatteryChargeCurrent: number;
  maxGridChargeCurrent: number;
}

export interface InverterState {
  voltage: number;
  current: number;
  frequency: number;
  power: number;
}

export interface SolarState {
  voltage: number;
  current: number;
  power: number;
  batteryChargeCurrent: number;
  panelCount: number;
  panelPeakPower: number;
}
