import { AnyAction } from "redux";
import { GridState } from "../../types";

const initialState: GridState = {
    voltage: 0,
    inputCurrent: 0,
    batteryChargeCurrent: 0,
    frequency: 50,
}

const gridReducer = (state: GridState = initialState, action: AnyAction) => {
    return state;
}
export default gridReducer