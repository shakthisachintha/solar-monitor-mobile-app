import { AnyAction } from "redux";
import { ChargerPriority, OutputPriority } from "../../types";
import { InverterSettings } from "../../types/store.types";
import { ConfigActions } from "../actionTypes";

const initialState: InverterSettings = {
    chargerPriority: ChargerPriority.CSO,
    outputPriority: OutputPriority.UTI,
    maxBatteryChargeCurrent: 0,
    maxGridChargeCurrent: 0
}

const configReducer = (state: InverterSettings = initialState, action: AnyAction) => {
    switch (action.type) {
        case ConfigActions.OUTPUT_PRIORITY_CHANGED:
            return { ...state, outputPriority: action.payload.outputPriority }
        case ConfigActions.CHARGER_PRORITY_CHANGED:
            return { ...state, chargerPriority: action.payload.chargerPriority }
        case ConfigActions.MAX_CHARGE_CURRENT_CHANGED:
            return { ...state, maxBatteryChargeCurrent: action.payload.maxBatteryChargeCurrent }
        case ConfigActions.MAX_GRID_CHARGE_CURRENT_CHANGED:
            return { ...state, maxGridChargeCurrent: action.payload.maxGridChargeCurrent }
        case ConfigActions.ALL_CONFIGS_FETCHED:
            {
                const { chargerPriority,
                    outputPriority,
                    maxBatteryChargeCurrent,
                    maxGridChargeCurrent } = action.payload
                return {
                    chargerPriority,
                    outputPriority,
                    maxBatteryChargeCurrent,
                    maxGridChargeCurrent
                }
            }
        default:
            return state;
    }
}
export default configReducer