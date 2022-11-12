import { AnyAction } from "redux";
import { SolarState } from "../../types/store.types";

const initialState: SolarState = {
    voltage: 0,
    current: 0,
    power: 0,
    batteryChargeCurrent: 0,
    panelCount: 5,
    panelPeakPower: 445
}

const solarReducer = (state: SolarState = initialState, action: AnyAction) => {
return state;
}
export default solarReducer