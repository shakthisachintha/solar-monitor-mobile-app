import { AnyAction } from "redux";
import { BatteryState } from "../../types/store.types";
import { BatteryActions } from "../actionTypes";

const initialState: BatteryState = {
    voltage: 0,
    current: 0,
    chargePower: 0,
    soc: 0,
}

const batteryReducer = (state: BatteryState = initialState, action: AnyAction) => {
    switch(action.type) {
        case BatteryActions.BATTERY_DATA_RECEIVED: {
            const {voltage, current, chargePower, soc} = action.payload;
            return {voltage, current, chargePower, soc}
        }
        default: return state
    }
}
export default batteryReducer