import {InverterState} from '../../types/store.types';
import {InverterActions} from '../actionTypes';

export const fetchInverterData = (inverterData: InverterState) => {
  return {type: InverterActions.INVERTER_DATA_RECEIVED, payload: inverterData};
};
