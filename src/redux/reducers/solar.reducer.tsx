import { AnyAction } from "redux";
import { SolarState } from "../../types/store.types";
import { SolarActions } from "../actionTypes";

const initialState: SolarState = {
    voltage: 0,
    current: 0,
    power: 0,
    batteryChargeCurrent: 0,
    panelCount: 5,
    panelPeakPower: 445
}

const solarReducer = (state: SolarState = initialState, action: AnyAction) => {
    switch (action.type) {
        case SolarActions.SOLAR_DATA_RECEIVED: {
            const { voltage,
                current,
                power,
                batteryChargeCurrent } = action.payload;
            return {
                ...state,
                voltage,
                current,
                power,
                batteryChargeCurrent
            }
        }
        default: return state
    }
}
export default solarReducer