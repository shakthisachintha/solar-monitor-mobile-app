import { Dispatch } from "redux";
import { configsAPI } from "../../apis";
import { ApiEndpoints } from "../../constants/app.const";
import { ChargerPriority, OutputPriority } from "../../types";
import { ConfigActions } from "../actionTypes";

type UpdateRequest = {
    value: number | ChargerPriority | OutputPriority
}

type UpdateRespose = {
    success: boolean,
    value: number,
    message: string
}

export const changeChargerPriority = (priority: ChargerPriority) => async (dispatch: Dispatch) => {
    const response = await configsAPI.post<any, UpdateRespose, UpdateRequest>(ApiEndpoints.configs.setChargerPriority, {value: priority});
    if (response.success) dispatch({type: ConfigActions.CHARGER_PRORITY_CHANGED, payload: {chargerPriority: ChargerPriority[response.value]}})
    else console.log(response.message)
}

export const changeOutputPriority = (priority: OutputPriority) => async (dispatch: Dispatch) => {
    const response = await configsAPI.post<any, UpdateRespose, UpdateRequest>(ApiEndpoints.configs.setChargerPriority, {value: priority});
    if (response.success) dispatch({type: ConfigActions.OUTPUT_PRIORITY_CHANGED, payload: {outputPriority: OutputPriority[response.value]}})
    else console.log(response.message)
}