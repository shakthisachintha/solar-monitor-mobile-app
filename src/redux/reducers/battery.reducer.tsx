import { AnyAction } from "redux";
import { BatteryState } from "../../types";

const initialState: BatteryState = {
    voltage: 0,
    current: 0,
    chargePower: 0,
    soc: 0,
}

const batteryReducer = (state: BatteryState = initialState, action: AnyAction) => {
    return state
}
export default batteryReducer