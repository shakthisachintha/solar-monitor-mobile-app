import { BatteryState } from "../../types/store.types";
import { BatteryActions } from "../actionTypes";

export const fetchBatteryData = (batteryData: BatteryState) => {
    return {type: BatteryActions.BATTERY_DATA_RECEIVED, payload: batteryData}
}