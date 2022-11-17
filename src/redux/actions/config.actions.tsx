import { Dispatch } from "redux";
import { API } from "../../apis";
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

type InverterConfigResponse = {
    success: boolean
    chargerPriority: ChargerPriority,
    outputPriority: OutputPriority,
    maxBatteryChargeCurrent: number,
    maxGridChargeCurrent: number
    message?: string
}

export const changeChargerPriority = (priority: ChargerPriority) => async (dispatch: Dispatch) => {
    const responseRaw = await API.post(ApiEndpoints.configs.setChargerPriority, { value: priority });
    const response = responseRaw.data as UpdateRespose
    if (response.success) dispatch({ type: ConfigActions.CHARGER_PRORITY_CHANGED, payload: { chargerPriority: response.value } })
    else console.log(response.message)
}

export const changeOutputPriority = (priority: OutputPriority) => async (dispatch: Dispatch) => {
    const responseRaw = await API.post(ApiEndpoints.configs.setOutputPriority, { value: priority });
    const response = responseRaw.data as UpdateRespose
    if (response.success) dispatch({ type: ConfigActions.OUTPUT_PRIORITY_CHANGED, payload: { outputPriority: response.value } })
    else console.log(response.message)
}

export const changeMaxChargeCurrent = (current: number) => async (dispatch: Dispatch) => {
    const responseRaw = await API.post(ApiEndpoints.configs.setMaxChargeCurrent, { value: current });
    const response = responseRaw.data as UpdateRespose
    if (response.success) dispatch({ type: ConfigActions.MAX_CHARGE_CURRENT_CHANGED, payload: { maxBatteryChargeCurrent: response.value } })
    else console.log(response.message)
}

export const changeMaxGridChargeCurrent = (current: number) => async (dispatch: Dispatch) => {
    const responseRaw = await API.post(ApiEndpoints.configs.setGridChargeCurrent, { value: current });
    const response = responseRaw.data as UpdateRespose
    if (response.success) dispatch({ type: ConfigActions.MAX_GRID_CHARGE_CURRENT_CHANGED, payload: { maxGridChargeCurrent: response.value } })
    else console.log(response.message)
}

export const getInverterConfigs = () => async (dispatch: Dispatch) => {
    const response = await API.get(ApiEndpoints.configs.getAllConfigs);
    const inverterConfig = response.data as InverterConfigResponse;
    if (inverterConfig.success) dispatch({ type: ConfigActions.ALL_CONFIGS_FETCHED, payload: inverterConfig })
    else console.log(inverterConfig.message)
}