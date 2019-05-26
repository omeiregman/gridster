import * as types from './types';

export const generateGrid = (payload) => {
    return {
        type: types.GENERATE_GRID,
        payload
    }
}