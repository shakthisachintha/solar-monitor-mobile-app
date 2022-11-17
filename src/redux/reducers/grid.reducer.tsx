import { AnyAction } from "redux";
import { GridState } from "../../types/store.types";
import { GridActions } from "../actionTypes";

const initialState: GridState = {
    voltage: 0,
    inputCurrent: 0,
    batteryChargeCurrent: 0,
    frequency: 50,
}

const gridReducer = (state: GridState = initialState, action: AnyAction) => {
    switch (action.type) {
        case GridActions.GRID_DATA_RECEIVED: {
            const { voltage, inputCurrent, batteryChargeCurrent, frequency } = action.payload;
            return { voltage, inputCurrent, batteryChargeCurrent, frequency }
        }

        default: return state;
    }
}
export default gridReducer