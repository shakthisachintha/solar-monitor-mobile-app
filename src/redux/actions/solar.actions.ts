import { SolarState } from "../../types/store.types";
import { SolarActions } from "../actionTypes";

export const fetchSolarData = (solarData: SolarState) => {
    return {type: SolarActions.SOLAR_DATA_RECEIVED, payload: solarData}
}