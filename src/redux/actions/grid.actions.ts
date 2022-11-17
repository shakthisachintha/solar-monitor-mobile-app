import {GridState} from '../../types/store.types';
import {GridActions} from '../actionTypes';

export const fethGridData = (gridData: GridState) => {
  return {type: GridActions.GRID_DATA_RECEIVED, payload: gridData};
};
