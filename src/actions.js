import * as types from './types';

export const generateGrid = (payload) => {
    return {
        type: types.GENERATE_GRID,
        payload
    }
}

export const shortestPath = (payload) => {
    console.log("Shortest path function clicked");
    const path = [5, 5, 0, 1, 0, 0, 5, 0, 1, 0, 1, 5, 5, 0, 1, 1, 0, 5, 0, 0, 0, 0, 5, 5, 5];
    console.log(payload);
    return {
        type: types.GENERATE_PATH,
        payload: path
    }
}