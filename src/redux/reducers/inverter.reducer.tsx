import { AnyAction } from "redux";
import { InverterState } from "../../types/store.types";

const initialState: InverterState = {
    voltage: 0,
    current: 0,
    power: 0,
    frequency: 50,
}

const inverterReducer = (state: InverterState = initialState, action: AnyAction) => {
    return state
}
export default inverterReducer