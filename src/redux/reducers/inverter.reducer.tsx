import { AnyAction } from "redux";
import { InverterState } from "../../types/store.types";
import { InverterActions } from "../actionTypes";

const initialState: InverterState = {
    voltage: 0,
    current: 0,
    power: 0,
    frequency: 50,
}

const inverterReducer = (state: InverterState = initialState, action: AnyAction) => {
    switch (action.type) {
        case InverterActions.INVERTER_DATA_RECEIVED: {
            const { voltage, current, frequency, power } = action.payload
            return { voltage, current, frequency, power };
        }
        default: return state;
    }
}
export default inverterReducer